import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwowayBindingParentComponent } from './twoway-binding-parent.component';

describe('TwowayBindingParentComponent', () => {
  let component: TwowayBindingParentComponent;
  let fixture: ComponentFixture<TwowayBindingParentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TwowayBindingParentComponent]
    });
    fixture = TestBed.createComponent(TwowayBindingParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
