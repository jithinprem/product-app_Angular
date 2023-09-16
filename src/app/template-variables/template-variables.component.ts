import { Component } from '@angular/core';

@Component({
  selector: 'app-template-variables',
  templateUrl: './template-variables.component.html',
  styleUrls: ['./template-variables.component.scss']
})
export class TemplateVariablesComponent {
  
  public ngModelInput: string = "";

  displayPhone(phoneNumber:string){
    console.log(phoneNumber);
  }
}
