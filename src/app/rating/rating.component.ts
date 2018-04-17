import { Component, OnInit, Input } from '@angular/core';

import { RatingService } from '../rating.service';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

  @Input() newsId: number;

  rating;

  constructor(private ratingService: RatingService) { }

  ngOnInit() {
    this.getRating();
  }

  vote(result) {

    if (!this.rating) {
      this.rating = { newsId: this.newsId, result}

      this.ratingService.vote(this.rating);
    } else {
      return alert('you have already participated in the vote');
    }
  }

  getRating() {
    this.rating = this.ratingService.getRating(this.newsId);
  }

}
