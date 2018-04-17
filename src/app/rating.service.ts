import { Injectable } from '@angular/core';

import { Rating } from './rating';

@Injectable()
export class RatingService {

  ratings: Rating[] = [];

  constructor() { }

  getRating(newsId) {
    return this.ratings.find(rating => rating.newsId === newsId);
  }

  vote(rating: Rating) {
    this.ratings.push(rating);
  }

}
