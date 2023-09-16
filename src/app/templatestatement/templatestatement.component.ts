import { Component } from '@angular/core';

@Component({
  selector: 'app-templatestatement',
  templateUrl: './templatestatement.component.html',
  styleUrls: ['./templatestatement.component.scss']
})
export class TemplatestatementComponent {

  showText: boolean = false;

  ToogleButtonClick(){
    this.showText = !this.showText;
  }
  
}
