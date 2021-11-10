import { Subscription } from 'rxjs';

import * as ef from 'src/app/extern/extern.functionality';
import { ConfigService } from './client.request.service';
import { NotificationService } from '../services/input.service';

export class APIServerQuery {
    subscription: Subscription = new Subscription;
    constructor(private configService: ConfigService, private notificationService: NotificationService) { }

    sendQueryRequest(value: string): void {
        this.configService.getRequest().subscribe((data: any) => {
            let sendResult;
            let x: ef.externfunc = new ef.externfunc(this.notificationService);
            if (data.body) {
                let len = Math.ceil(Math.random() * 20)
                /**
                 * Needed temporarily and changes the amount of cards in the selection announcement
                 */
                let mongodb = data.body;
                mongodb.length = len;
                /**
                 * Also, simulates query calls with new results for each selection???  
                 */
                sendResult = x.bindQueryResults(value, mongodb);
            } else {
                sendResult = x.bindQueryResults(value, []);
            }
        }, (e: Error): Error => {
            return new Error("Server error based on: " + e.message);
        }, (): string => { return "Request completed" });
    }
}