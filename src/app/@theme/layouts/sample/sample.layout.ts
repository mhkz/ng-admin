import {Component, OnDestroy} from '@angular/core';
import {delay, withLatestFrom, takeWhile, filter} from 'rxjs/operators';
import {
    NbMediaBreakpoint,
    NbMediaBreakpointsService,
    NbMenuItem,
    NbMenuService,
    NbSidebarService,
    NbThemeService,
} from '@nebular/theme';

import {StateService} from '../../../@core/data/state.service';
import {NavigationEnd, Router} from '@angular/router';

// TODO: move layouts into the framework
@Component({
    selector: 'ngx-sample-layout',
    styleUrls: ['./sample.layout.scss'],
    template: `
        <nb-layout [center]="layout.id === 'center-column'" windowMode>
            <nb-layout-header fixed>
                <ngx-header [position]="sidebar.id === 'start' ? 'normal': 'inverse'"></ngx-header>
            </nb-layout-header>

            <nb-sidebar class="menu-sidebar"
                        tag="menu-sidebar"
                        responsive
                        [end]="sidebar.id === 'end'">
                <nb-sidebar-header *ngIf="currentTheme !== 'corporate'">
                    <a href="#" class="btn btn-hero-success main-btn">
                        <i class="ion ion-social-github"></i> <span>Support Us</span>
                    </a>
                </nb-sidebar-header>
                <ng-content select="nb-menu"></ng-content>
            </nb-sidebar>

            <nb-layout-column class="main-content">
                <h2>{{this.pageTitle}}
                    <small>{{this.pageDescript}}</small>
                    <span style="float: right;">{{title}}</span>
                </h2>
                <ng-content select="router-outlet"></ng-content>
            </nb-layout-column>

            <nb-layout-column start class="small" *ngIf="layout.id === 'two-column' || layout.id === 'three-column'">
                <nb-menu [items]="subMenu"></nb-menu>
            </nb-layout-column>

            <nb-layout-column class="small" *ngIf="layout.id === 'three-column'">
                <nb-menu [items]="subMenu"></nb-menu>
            </nb-layout-column>

            <nb-layout-footer fixed>
                <ngx-footer></ngx-footer>
            </nb-layout-footer>

            <nb-sidebar class="settings-sidebar"
                        tag="settings-sidebar"
                        state="collapsed"
                        fixed
                        [end]="sidebar.id !== 'end'">
                <ngx-theme-settings></ngx-theme-settings>
            </nb-sidebar>
        </nb-layout>
    `,
})
export class SampleLayoutComponent implements OnDestroy {
    pageTitle = '';
    pageDescript = '';
    urlArr = [];
    title = '';
    subMenu: NbMenuItem[] = [
        {
            title: 'PAGE LEVEL MENU',
        },
    ];
    layout: any = {};
    sidebar: any = {};

    private alive = true;

    currentTheme: string;

    constructor(protected stateService: StateService,
                protected menuService: NbMenuService,
                protected themeService: NbThemeService,
                protected bpService: NbMediaBreakpointsService,
                protected sidebarService: NbSidebarService,
                public router: Router) {
        const squareOdd = router.events.pipe(filter(event => event instanceof NavigationEnd));
        squareOdd.subscribe((event: NavigationEnd) => {
            this.urlArr = event.url.split('/');
            this.pageTitle = this.urlArr[2];
            this.pageDescript = this.urlArr[3] ? `/` + ' ' + `${this.urlArr[3]}` : '';
            const currentTitle = this.urlArr[3] ? this.urlArr[3] : '';
            switch (currentTitle) {
                case 'list':
                    this.title = '文章列表';
                    break;
                case 'create':
                    this.title = '创建文章';
                    break;
                default:
                    this.title = '仪表盘';
                    break;
            }
        });
        this.stateService.onLayoutState()
            .pipe(takeWhile(() => this.alive))
            .subscribe((layout: string) => this.layout = layout);

        this.stateService.onSidebarState()
            .pipe(takeWhile(() => this.alive))
            .subscribe((sidebar: string) => {
                this.sidebar = sidebar;
            });

        const isBp = this.bpService.getByName('is');
        this.menuService.onItemSelect()
            .pipe(
                takeWhile(() => this.alive),
                withLatestFrom(this.themeService.onMediaQueryChange()),
                delay(20),
            )
            .subscribe(([item, [bpFrom, bpTo]]: [any, [NbMediaBreakpoint, NbMediaBreakpoint]]) => {

                if (bpTo.width <= isBp.width) {
                    this.sidebarService.collapse('menu-sidebar');
                }
            });

        this.themeService.getJsTheme()
            .pipe(takeWhile(() => this.alive))
            .subscribe(theme => {
                this.currentTheme = theme.name;
            });
    }

    ngOnDestroy() {
        this.alive = false;
    }
}
