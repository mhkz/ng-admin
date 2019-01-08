import { NgModule } from '@angular/core';
import { ArticleRoutingModule, routedComponents } from './article-routing.module';

@NgModule({
    imports: [
       ArticleRoutingModule,
    ],
    declarations: [
        ...routedComponents,
    ],
})
export class ArticleModule { }
