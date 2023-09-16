import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyAttributeBindingComponent } from './property-attribute-binding.component';

describe('PropertyAttributeBindingComponent', () => {
  let component: PropertyAttributeBindingComponent;
  let fixture: ComponentFixture<PropertyAttributeBindingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PropertyAttributeBindingComponent]
    });
    fixture = TestBed.createComponent(PropertyAttributeBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
