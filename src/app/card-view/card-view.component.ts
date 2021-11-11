import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import * as ef from 'src/app/extern/extern.functionality';
import { HistoryNotificationService } from '../services/history.service';

import { NotificationService } from '../services/input.service';

@Component({
  selector: 'app-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.sass']
})
export class CardViewComponent implements OnInit, OnDestroy {
  @Input() cardViewArr: any[] = [];
  button_text: string = "";
  subscription: Subscription = new Subscription;

  constructor(private notificationService: NotificationService, private historyNotificationService: HistoryNotificationService) { }

  ngOnInit(): void {
    this.subscription = this.notificationService.serverAnnouncementStatus$.subscribe((value) => {
      this.cardViewArr = value[0].results;
    });
    this.subscription = this.historyNotificationService.selectionAnnouncementStatus$.subscribe((value) => {
      // values are not shown if one item is left in the list???
      this.cardViewArr = value;
    });
    this.button_text = "Delete Entry";
  }

  delEmittedClick(id: any): void {
    new ef.cardItemFunc().cardItemRemoval(id, this.cardViewArr);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}