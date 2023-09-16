import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, Router, Routes } from '@angular/router';
import { RoutingWithParamsFirstComponent } from './routing-with-params-first/routing-with-params-first.component';
import { RoutingWithParamsSecondComponent } from './routing-with-params-second/routing-with-params-second.component';

const routes: Routes = [
  {
    path: "routing-first-params/:id",
    component: RoutingWithParamsFirstComponent
  },
  {
    path: "routing-second-params",
    component: RoutingWithParamsSecondComponent
  },
  {
    path: '**', component: RoutingWithParamsFirstComponent
  }
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ]
})
export class RoutingWithParamsModule { }
