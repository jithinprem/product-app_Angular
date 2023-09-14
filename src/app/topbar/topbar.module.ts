import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopbarPrimarychildComponent } from './topbar-primarychild/topbar-primarychild.component';
import { TopbarSecondarychildComponent } from './topbar-secondarychild/topbar-secondarychild.component';
import { TopbarComponent } from './topbar.component';



@NgModule({
  declarations: [
    TopbarPrimarychildComponent,
    TopbarSecondarychildComponent,
    TopbarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TopbarComponent
  ]
})
export class TopbarModule { }
