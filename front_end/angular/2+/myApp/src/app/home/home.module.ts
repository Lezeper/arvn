import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { SharedModule } from '../shared';
import { ArticleModule } from '../article/article.module';

const homeRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: '',
    component: HomeComponent
  }
]);

@NgModule({
  imports: [
    homeRouting,
    SharedModule,
    ArticleModule
  ],
  declarations: [
    HomeComponent
  ],
  providers: [
    
  ]
})
export class HomeModule {};