import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { ApiService } from './api.service';
import { Article } from '../models/article.model';
import { map } from 'rxjs/operators/map';

@Injectable()
export class ArticleService {
  constructor(private apiService: ApiService) {}

  query(): Observable<{articles: Article[], articlesCount: number}> {
    return this.apiService.get('/articles');
  }

  get(slug:string) {
    return this.apiService.get('/articles/' + slug).pipe(map(data=>data.article));
  }
}