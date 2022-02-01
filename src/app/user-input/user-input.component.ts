import { Component, Input } from '@angular/core';
import { NotificationService } from '../services/input.service';
import { isNullOrWhitespace, replaceAll } from '../extern/extern-functions';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.sass']
})
export class UserInputComponent {

  @Input() inputFieldId: string = "";

  constructor(private notificationService: NotificationService) { }

  userQueryEvent(input: string): void {
    this.evDetectProcessEnteredInput(input)
  }

  sanitizeIncoming(param: string): string {
    // Matches any word character (alphanumeric & underscore).
    // Only matches low-ascii characters (no accented or non-roman characters).
    let charExp: string = "[^a-zA-Z-,]";
    let rE = new RegExp(charExp);
    let value: string = encodeURI(param);

    // Split the text to be analyzed
    // Examine each index and remove any implausible text
    let splitText = value.split(rE);
    // Reconstruct the text after analyzation
    value = splitText.join(' ');
    value = replaceAll(value, " ", "");
    return value;
  }

  eraseAllInput(): void {
    let erasePreviousQuery = document.getElementById(this.inputFieldId) as HTMLInputElement;
    erasePreviousQuery.value = "";
  }

  evDetectProcessEnteredInput(value: string) {
    if (!isNullOrWhitespace(value)) {
      let aConfirmedInput = this.sanitizeIncoming(value);
      this.notificationService.announcementMade(aConfirmedInput);
      this.eraseAllInput();
    }
  }
}