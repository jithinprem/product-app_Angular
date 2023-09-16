import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-twoway-binding-child',
  templateUrl: './twoway-binding-child.component.html',
  styleUrls: ['./twoway-binding-child.component.scss']
})
export class TwowayBindingChildComponent {
  @Input() size: number = 10;
  @Output() sizeChange = new EventEmitter<number>();
  
  Nsize: number = 1;
  incSize(){
    this.size +=1;
    this.sizeChange.emit(this.size);
  }
  decSize(){
    this.size -=1;
    this.sizeChange.emit(this.size);
  }

}
