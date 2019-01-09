import { NbMenuService } from '@nebular/theme';
import { Component } from '@angular/core';

@Component({
  selector: 'ngx-article-detail',
  styleUrls: ['./detail.component.scss'],
  templateUrl: './detail.component.html',
})
export class ArticleDetailComponent {

  constructor(private menuService: NbMenuService) {
  }
}
