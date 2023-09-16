import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-event-binding-child',
  templateUrl: './event-binding-child.component.html',
  styleUrls: ['./event-binding-child.component.scss']
})
export class EventBindingChildComponent {
  
  @Output() deleteRequest = new EventEmitter<string>();

  OnClickDelete(): void{
    this.deleteRequest.emit("del btn pressed");
  }
}
