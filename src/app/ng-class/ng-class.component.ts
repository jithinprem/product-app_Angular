import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html',
  styleUrls: ['./ng-class.component.scss']
})
export class NgClassComponent {
  public isSpecial = true;

  public multipleClass = {
    firstClass: true, 
    secondClass: true,
    thirdClass: false
  }

  public ToggleClassIfSpecial(){
    this.isSpecial = !this.isSpecial;
  }
}
