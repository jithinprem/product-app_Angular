import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding-parent',
  templateUrl: './event-binding-parent.component.html',
  styleUrls: ['./event-binding-parent.component.scss']
})
export class EventBindingParentComponent {
  
  deleteKeyPressedMessage : string = "";
  onDeletePressedFromChild(msg : any){
    this.deleteKeyPressedMessage = msg;
    console.log(msg);
  }
}
