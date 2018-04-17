import { Component, OnInit } from '@angular/core';

import { NewsService } from '../news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  constructor(private newsService: NewsService) { }

  news = [];

  ngOnInit() {
    this.getNews();
  }

  getNews() {
    this.newsService.getNews()
      .subscribe(news => this.news = news);
  }

}
