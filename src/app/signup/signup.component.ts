import { Component } from '@angular/core';
import { IUserDetails } from '../IUserDetails.Interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  
  public form!: Partial<IUserDetails>;  // why is this used ??
  public error: boolean = false;
  constructor(
      public readonly router: Router,
      //private readonly userAuth: User
    ){}

    public ngOnInit(): void{
      this.form = {
        email: '',
        password: ''
      }
    }

    

}
