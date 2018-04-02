import { Component, Input, OnInit } from '@angular/core';

import { Article } from '../shared/models/article.model';
import { ArticleService } from '../shared/services/article.service';

@Component({
  selector: 'article-list',
  styleUrls: [],
  templateUrl: './article-list.component.html'
})
export class ArticleListComponent implements OnInit{
  constructor(private articleService: ArticleService) {}

  @Input() limit: number;

  results: Article[];

  ngOnInit() {
    this.articleService.query().subscribe(data => {
      this.results = data.articles;
    });
  }
}