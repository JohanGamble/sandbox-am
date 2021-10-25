import { AfterViewInit, Component } from '@angular/core';

import { processEnteredInput } from 'sandbox-helper-functions';
import * as inputIdentity from '../scripts/user_input_functions';
import * as cef from '../scripts/card_effect_functions';
@Component({
  selector: 'app-root',
  template: `<div class="dmc0">
  <div class="ql0">
      <label>
          <input id="{{inputFieldId}}" type="text" placeholder="..." class="if0" />
      </label>
      <div id="inputHistoryContainer"></div>
  </div>
  <div class="dc0"></div>
</div>`,
  styles: []
})
export class AppComponent implements AfterViewInit {
  inputFieldId: string = "input";
  constructor() { }
  ngAfterViewInit(): void {
    /* External npm module */
    processEnteredInput(this.inputFieldId);
    /* Local Scripts */
    this.loadExternalScripts();
  }
  
  loadExternalScripts() {
    cef.loadEffectsForEventListeners(this.inputFieldId);
    inputIdentity.inputId(this.inputFieldId);
  }
}