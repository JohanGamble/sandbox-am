import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import * as ef from 'src/app/extern/extern.functionality';

import { APIServerQuery } from 'src/app/services/api.server.queries';
import { NotificationService } from '../services/input.service';
import { ConfigService } from '../services/client.request.service';
import { HistoryNotificationService } from '../services/history.service';

@Component({
  selector: 'app-history',
  templateUrl: 'history.component.html',
  styleUrls: ['history.component.css']
})
export class HistoryContainerComponent implements OnInit, OnDestroy {
  @Input() inputHistoryContainer: string = ""
  queryResults: any[] = [];
  button_text: string = "";
  subscription: Subscription = new Subscription;
  apisq: APIServerQuery = new APIServerQuery(this.configService, this.notificationService)
  
  constructor(private notificationService: NotificationService, private configService: ConfigService, private historyNotificationService: HistoryNotificationService) { }
  
  ngOnInit() {
    this.subscription = this.notificationService.announcementStatus$.subscribe((value) => {
      this.sendQueryRequest(value);
    })
    this.subscription = this.notificationService.serverAnnouncementStatus$.subscribe((value) => {
      this.queryResults.push(value[0]);
    });
    this.button_text = "Delete Entry";
  }

  sendQueryRequest(value: string) {
    this.apisq.sendQueryRequest(value);
  }

  listItemClicked(id: number): void {
    let selCards = new ef.cardItemFunc().cardItemRegeneration(id, this.queryResults);
    this.historyNotificationService.selectionAnnouncementMade(selCards);
  }

  delEmittedClick(id: number): void {
    new ef.listItemfunc().listItemRemoval(id, this.queryResults);
    new ef.cardItemFunc().cardRemoval();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
