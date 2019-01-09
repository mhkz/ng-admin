import { Component } from '@angular/core';

@Component({
    selector: 'ngx-article',
    template: `
    <nb-card>
      <nb-card-header>Nebula</nb-card-header>
      <router-outlet></router-outlet>
    </nb-card>
  `,
})
export class ArticleComponent {
}
