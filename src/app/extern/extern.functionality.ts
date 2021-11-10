import * as rfn from 'src/scripts/random_fractional_numbers';
import { NotificationService } from '../services/input.service';

class ExternalFunctionality {
    private _queryResults: any[] = [];
    constructor(private notificationService: NotificationService) { }
    // Eventually an array type must be defined
    bindQueryResults(value: string, resultArr: []): void {
        let list_identifier = rfn.testNumberId();
        for (let indexedQuery = 0; indexedQuery < this._queryResults.length; indexedQuery++) {
            if (this._queryResults[indexedQuery].id == list_identifier) {
                // Maximum entries of 100 per session
                list_identifier = rfn.testNumberId();
            }
        }
        this._queryResults.push({ id: list_identifier, name: value, results: resultArr });
        this.notificationService.serverAnnonuncementMade(this._queryResults);
    }
}

class ListItemFunctionality {
    listItemRemoval(id: number, queryResults: any[]): void {
        for (let indexedQuery = 0; indexedQuery < queryResults.length; indexedQuery++) {
            if (queryResults[indexedQuery].id == id) {
                document.getElementById(id.toString())?.remove();
            }
        }
    }
}

class CardItemFunctionality {
    cardItemRegeneration(id: number, queryResults: any[]): any {
        for (let indexedQuery = 0; indexedQuery < queryResults.length; indexedQuery++) {
            if (queryResults[indexedQuery].id == id) {
                return queryResults[indexedQuery].results as any[]
            }
        }
    }
    cardItemRemoval(id: number, queryCardResults: any[]): void {
        for (let indexedQuery = 0; indexedQuery < queryCardResults.length; indexedQuery++) {
            if (queryCardResults[indexedQuery]._id == id) {
                document.getElementById(id.toString())?.remove();
            }
        }
    }
    cardRemoval(): void {
        let cardClass = document.querySelectorAll('div.card');
        for (let indexedQuery = 0; indexedQuery < cardClass.length; indexedQuery++) {
            cardClass.item(indexedQuery)?.remove();
        }
    }
}

export {
    ExternalFunctionality as externfunc,
    ListItemFunctionality as listItemfunc,
    CardItemFunctionality as cardItemFunc
}