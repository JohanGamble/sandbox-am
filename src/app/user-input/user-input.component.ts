import { Component, Input } from '@angular/core';
import { NotificationService } from '../services/input.service';

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

  evDetectProcessEnteredInput(value: string) {
    if (!this.isNullOrWhitespace(value)) {
      let aConfirmedInput = this.sanitizeIcoming(value);
      this.notificationService.announcementMade(aConfirmedInput);
      this.eraseAllInput();
    }
  }

  sanitizeIcoming(param: string): string {
    // Regex must contain white space, comma, hyphen, all punctuation marks
    // Examine each index and remove any implausible text
    let text = /[\s\W\.]/gmu;
    let paramArr = [];
    if (param != undefined) {
      // Split the text to be analyzed
      paramArr = param.split(text);
      // Reconstruct the text after analyzation
      param = paramArr.join(' ').trim();
    }
    return param;
  }

  isNullOrWhitespace(input: string): boolean {
    let value = encodeURI(input);
    return !value || !value.trim();
  }
  
  eraseAllInput(): void {
    let erasePreviousQuery = document.getElementById(this.inputFieldId) as HTMLInputElement;
    erasePreviousQuery.value = "";
  }
}