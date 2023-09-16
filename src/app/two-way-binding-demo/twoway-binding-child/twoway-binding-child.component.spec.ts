import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwowayBindingChildComponent } from './twoway-binding-child.component';

describe('TwowayBindingChildComponent', () => {
  let component: TwowayBindingChildComponent;
  let fixture: ComponentFixture<TwowayBindingChildComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TwowayBindingChildComponent]
    });
    fixture = TestBed.createComponent(TwowayBindingChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
