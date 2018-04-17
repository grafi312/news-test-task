import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NewsComponent } from './news/news.component';
import { NewsDetailComponent } from './news-detail/news-detail.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'news',
    pathMatch: 'full'
  },

  {
    path: 'news',
    component: NewsComponent
  },

  {
    path: 'news/:id',
    component: NewsDetailComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
