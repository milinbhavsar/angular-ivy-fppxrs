import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import {
  getDelayedValueObservable,
  getMultiValueObservable,
  getSingleValueObservable,
} from '../../utils';

@Component({
  selector: 'app-manual-subscription',
  templateUrl: './manual-subscription.component.html',
  styleUrls: ['./manual-subscription.component.css'],
})
export class ManualSubscriptionComponent implements OnInit {
  first: string;
  second: string;
  third: number;
  thirdSubscription: Subscription;

  constructor() {}

  ngOnInit() {
    getSingleValueObservable().subscribe((value) => {
      this.first = value;
    });

    getDelayedValueObservable().subscribe((value) => {
      this.second = value;
    });

    this.thirdSubscription = getMultiValueObservable().subscribe((value) => {
      this.third = value;
    });
  }

  ngOnDestroy() {
    this.thirdSubscription.unsubscribe();
  }
}
