import { NgModule } from '@angular/core';
import { ArticleRoutingModule, routedComponents } from './article-routing.module';
import { ThemeModule } from '../../@theme/theme.module';

@NgModule({
    imports: [
       ArticleRoutingModule,
       ThemeModule,
    ],
    declarations: [
        ...routedComponents,
    ],
})
export class ArticleModule { }
