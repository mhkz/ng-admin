import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ArticleComponent} from './article.component';
import { ArticleListComponent } from './article-list/article.component';

const routes: Routes = [{
    path: '',
    component: ArticleComponent,
    children: [{
        path: 'list',
        component: ArticleListComponent,
      }],
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ArticleRoutingModule {}

export const routedComponents = [
    ArticleComponent,
    ArticleListComponent,
];
