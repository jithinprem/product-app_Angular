import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgStyleDemoComponent } from './ng-style-demo.component';

describe('NgStyleDemoComponent', () => {
  let component: NgStyleDemoComponent;
  let fixture: ComponentFixture<NgStyleDemoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgStyleDemoComponent]
    });
    fixture = TestBed.createComponent(NgStyleDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
