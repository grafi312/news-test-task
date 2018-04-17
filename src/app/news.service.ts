import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { News } from './news';

@Injectable()
export class NewsService {

  private newsUrl: string = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  getNews(): Observable<News[]> {
    return this.http.get<News[]>(this.newsUrl);
  }

  getNewsById(id): Observable<News> {
    const url = `${this.newsUrl}/${id}`;

    return this.http.get<News>(url);
  }

}
