import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HistoryContainerComponent } from './history-container/history.component';
import { UserInputComponent } from './user-input/user-input.component';
import { CardViewComponent } from './card-view/card-view.component';
import { ButtonComponent } from './button/button.component';

import { NotificationService } from './services/input.service';
import { ConfigService } from './services/client.request.service';
import { HistoryNotificationService } from './services/history.service';


@NgModule({
  declarations: [
    AppComponent,
    HistoryContainerComponent,
    UserInputComponent,
    CardViewComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [NotificationService, ConfigService, HistoryNotificationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
