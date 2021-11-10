import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.sass']
})
export class ButtonComponent {

  @Input() text: string = "";
  @Output() evClick: EventEmitter<Event> = new EventEmitter<Event>();
  constructor() { }

  emitEvent(ev: Event) {
    this.evClick.emit(ev);
    ev.stopPropagation();
  }
}
