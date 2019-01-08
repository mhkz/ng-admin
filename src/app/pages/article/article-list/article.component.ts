import { NbMenuService } from '@nebular/theme';
import { Component } from '@angular/core';

@Component({
  selector: 'ngx-article-list',
  styleUrls: ['./article.component.scss'],
  templateUrl: './article.component.html',
})
export class ArticleListComponent {

  constructor(private menuService: NbMenuService) {
  }
}
