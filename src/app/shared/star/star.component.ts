import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.scss'],
})
export class StarComponent implements OnInit, OnChanges {
  @Input() rating!: number;

  @Output() ratingClick = new EventEmitter<number>();

  starWidth!: number;

  constructor() {}

  ngOnChanges(): void {
    console.log('ng on change', this.rating);
    this.starWidth = this.rating * 16;
  }

  ngOnInit(): void {
    console.log('ng on init');
  }

  onRating(): void {
    this.ratingClick.emit(this.rating);
  }
}
