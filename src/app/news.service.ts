import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { News } from './news';
import { NEWS } from './mock-news';

@Injectable()
export class NewsService {

  constructor() { }

  getNews(): Observable<News[]> {
    return of(NEWS);
  }

  getNewsById(id): Observable<News> {
    return of(NEWS.find(news => news.id === id));
  }

}
