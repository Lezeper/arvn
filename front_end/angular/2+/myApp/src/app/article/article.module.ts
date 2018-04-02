import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ArticleListComponent } from './article-list.component';
import { ArticleComponent } from './article.component';
import { SharedModule } from '../shared';
import { ArticleResolver } from './article-resolver.service';

const articleRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: 'article/:slug',
    component: ArticleComponent,
    resolve: { // prevent view to render before get the required data
      article: ArticleResolver
    }
  }
]);

@NgModule({
  imports: [
    articleRouting,
    SharedModule
  ],
  declarations: [
    ArticleComponent,
    ArticleListComponent
  ],
  exports: [
    ArticleListComponent
  ],
  providers: [ArticleResolver]
})
export class ArticleModule {}