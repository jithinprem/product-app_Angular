import { Component } from '@angular/core';

@Component({
  selector: 'app-pipesdemo',
  templateUrl: './pipesdemo.component.html',
  styleUrls: ['./pipesdemo.component.scss']
})
export class PipesdemoComponent {

  GetDate(){
    return new Date();
  }
}
