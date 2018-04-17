import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { News } from '../news';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.css']
})
export class NewsDetailComponent implements OnInit {

  news: News;

  constructor(
    private route: ActivatedRoute,
    private newsService: NewsService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getNewsById();
  }

  getNewsById() {
    const id = +this.route.snapshot.paramMap.get('id');

    this.newsService.getNewsById(id)
      .subscribe(news => this.news = news);
  }

  goToBack() {
    this.location.back();
  }

}
