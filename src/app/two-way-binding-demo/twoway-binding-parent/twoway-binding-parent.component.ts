import { Component } from '@angular/core';

@Component({
  selector: 'app-twoway-binding-parent',
  templateUrl: './twoway-binding-parent.component.html',
  styleUrls: ['./twoway-binding-parent.component.scss']
})
export class TwowayBindingParentComponent {
  fontSize : number = 10;
  
  public incFont(){
    this.fontSize +=1;
  }
}
