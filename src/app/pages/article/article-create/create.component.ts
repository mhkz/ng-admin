import { NbMenuService } from '@nebular/theme';
import { Component } from '@angular/core';

@Component({
  selector: 'ngx-article-create',
  styleUrls: ['./create.component.scss'],
  templateUrl: './create.component.html',
})
export class ArticleCreateComponent {

  constructor(private menuService: NbMenuService) {
  }
}
