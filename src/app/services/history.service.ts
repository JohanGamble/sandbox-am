import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class HistoryNotificationService {
    private notifySelectionSubscribers = new Subject<any[]>()
    private notifyDeletionSubscribers = new Subject<string>()

    selectionAnnouncementStatus$ = this.notifySelectionSubscribers.asObservable();
    deletionAnnouncementStatus$ = this.notifyDeletionSubscribers.asObservable();
    
    selectionAnnouncementMade(value: any[]): void {
        this.notifySelectionSubscribers.next(value);
    }

    deletionAnnouncementMade(value: string): void {
        this.notifyDeletionSubscribers.next(value);
    }
}