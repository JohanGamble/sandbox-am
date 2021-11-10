import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class NotificationService {
    private notifySubscribers = new Subject<string>()
    private notifyServerSubscribers = new Subject<any[]>()

    announcementStatus$ = this.notifySubscribers.asObservable();
    serverAnnouncementStatus$ = this.notifyServerSubscribers.asObservable();

    announcementMade(value: string): void {
        this.notifySubscribers.next(value);
    }

    serverAnnonuncementMade(valueArr: any[]): void {
        this.notifyServerSubscribers.next(valueArr);
    }
}