import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ArticleComponent} from './article.component';
import { ArticleListComponent } from './article-list/article.component';
import { ArticleDetailComponent } from './article-detail/detail.component';
import {ArticleCreateComponent} from './article-create/create.component';

const routes: Routes = [{
    path: '',
    component: ArticleComponent,
    children: [
        {
            path: 'list',
            component: ArticleListComponent,
        },
        {
            path: 'detail',
            component: ArticleDetailComponent,
        },
        {
            path: 'create',
            component: ArticleCreateComponent,
        },
    ],
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ArticleRoutingModule {}

export const routedComponents = [
    ArticleComponent,
    ArticleListComponent,
    ArticleDetailComponent,
    ArticleCreateComponent,
];
