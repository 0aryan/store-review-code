import { Component, OnInit } from '@angular/core';
import { ReviewForm } from '../review-form';

@Component({
  selector: 'app-review-form',
  templateUrl: './review-form.component.html',
  styleUrls: ['./review-form.component.scss'],
})
export class ReviewFormComponent implements OnInit {
  reviewFormModel = new ReviewForm();

  ratings = [1, 2, 3, 4, 5];

  constructor() {}

  ngOnInit(): void {}

  onSubmit(): void {
    console.log(this.reviewFormModel);
  }
}
