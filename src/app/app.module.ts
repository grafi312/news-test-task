import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { NewsComponent } from './news/news.component';
import { NewsService } from './news.service';
import { AppRoutingModule } from './/app-routing.module';
import { NewsDetailComponent } from './news-detail/news-detail.component';

import { TruncatePipe } from './truncate.pipe';
import { RatingComponent } from './rating/rating.component';
import { RatingService } from './rating.service';


@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    NewsDetailComponent,
    TruncatePipe,
    RatingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [NewsService, RatingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
