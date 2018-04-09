import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { AuthModule } from './auth/auth.module';
import { ArticleModule } from './article/article.module';
import { TestModule } from './test/test.module';

import {
  HeaderComponent,
  SharedModule,
  ApiService,
  AuthGuard,
  UserService,
  ArticleService,
  JwtService,
  HttpTokenInterceptor
} from './shared';

const rootRouting: ModuleWithProviders = RouterModule.forRoot([]);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    rootRouting,
    SharedModule,
    HomeModule,
    AuthModule,
    ArticleModule,
    TestModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpTokenInterceptor, multi: true },
    ApiService,
    AuthGuard,
    UserService,
    JwtService,
    ArticleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
