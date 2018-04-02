import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {
  Article,
  ArticleService,
} from '../shared'

@Component({
  selector: 'article',
  templateUrl: './article.component.html'
})
export class ArticleComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private articleService: ArticleService,
  ) {}

  article: Article;
  
  ngOnInit() {
    this.route.data.subscribe(data => {
      this.article = data.article;
    });
  }
}