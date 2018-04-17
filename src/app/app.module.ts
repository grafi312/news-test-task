import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NewsComponent } from './news/news.component';
import { NewsService } from './news.service';
import { AppRoutingModule } from './/app-routing.module';
import { NewsDetailComponent } from './news-detail/news-detail.component';

import { TruncatePipe } from './truncate.pipe';


@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    NewsDetailComponent,
    TruncatePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [NewsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
