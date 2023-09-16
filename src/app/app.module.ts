import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopbarModule } from './topbar/topbar.module';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { TemplatestatementComponent } from './templatestatement/templatestatement.component';
import { PipesdemoComponent } from './pipesdemo/pipesdemo.component';
import { CustomPipeDemoPipe } from './pipesdemo/custom-pipe-demo.pipe';
import { PropertyAttributeBindingComponent } from './property-attribute-binding/property-attribute-binding.component';
import { EventBindingDemoComponent } from './event-binding-demo/event-binding-demo.component';
import { EventBindingParentComponent } from './event-binding-demo/event-binding-parent/event-binding-parent.component';
import { EventBindingChildComponent } from './event-binding-demo/event-binding-child/event-binding-child.component';
import { TwoWayBindingDemoComponent } from './two-way-binding-demo/two-way-binding-demo.component';
import { TwowayBindingChildComponent } from './two-way-binding-demo/twoway-binding-child/twoway-binding-child.component';
import { TwowayBindingParentComponent } from './two-way-binding-demo/twoway-binding-parent/twoway-binding-parent.component';
import { TemplateVariablesComponent } from './template-variables/template-variables.component';
import { FormsModule } from '@angular/forms';
import { NgClassComponent } from './ng-class/ng-class.component';
import { NgStyleDemoComponent } from './ng-style-demo/ng-style-demo.component';
import { HighlightDirective } from './highlight-demo.directive';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    TemplatestatementComponent,
    PipesdemoComponent,
    CustomPipeDemoPipe,
    PipesdemoComponent,
    PropertyAttributeBindingComponent,
    EventBindingDemoComponent,
    EventBindingParentComponent,
    EventBindingChildComponent,
    TwoWayBindingDemoComponent,
    TwowayBindingChildComponent,
    TwowayBindingParentComponent,
    TemplateVariablesComponent,
    NgClassComponent,
    NgStyleDemoComponent,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TopbarModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
