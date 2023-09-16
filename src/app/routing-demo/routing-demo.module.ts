import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { RoutingFirstComponent } from './routing-first/routing-first.component';
import { RoutingSecondComponent } from './routing-second/routing-second.component';

const routes: Routes = [
  {
    path: 'routing-first',
    component: RoutingFirstComponent
  },
  {
    path: 'routing-second',
    component: RoutingSecondComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule] // exporting our route module so that it can be imported at root module
})
export class RoutingDemoModule { 

}
