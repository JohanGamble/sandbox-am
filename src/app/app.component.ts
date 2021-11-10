import { AfterViewInit, Component } from '@angular/core';
import { processEnteredInput, ElementId } from 'sandbox-helper-functions';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent implements AfterViewInit {
  
  constructor() { }

  elementId: ElementId = {
    input_id: 'queryInput',
    input_history_container_id: 'inputHistoryContainer',
    div_dc0: 'dc0',
    div_dp0: 'dp0', // Provided for future use
    div_dbr0: 'dbr0', // Provided for future use
    css_class_effect: 'bd'
  }

  ngAfterViewInit(): void {
    /* External npm module */
    processEnteredInput(this.elementId);
  }
}