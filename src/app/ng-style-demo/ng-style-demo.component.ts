import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-style-demo',
  templateUrl: './ng-style-demo.component.html',
  styleUrls: ['./ng-style-demo.component.scss']
})
export class NgStyleDemoComponent {

  demoStyles = {
    styleOne : true,
    styleTwo : true,
    styleThree : false
  }
}
