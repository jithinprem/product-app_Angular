import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingWithParamsComponent } from './routing-with-params.component';

describe('RoutingWithParamsComponent', () => {
  let component: RoutingWithParamsComponent;
  let fixture: ComponentFixture<RoutingWithParamsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoutingWithParamsComponent]
    });
    fixture = TestBed.createComponent(RoutingWithParamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
