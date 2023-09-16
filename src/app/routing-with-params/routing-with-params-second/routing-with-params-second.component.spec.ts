import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingWithParamsSecondComponent } from './routing-with-params-second.component';

describe('RoutingWithParamsSecondComponent', () => {
  let component: RoutingWithParamsSecondComponent;
  let fixture: ComponentFixture<RoutingWithParamsSecondComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoutingWithParamsSecondComponent]
    });
    fixture = TestBed.createComponent(RoutingWithParamsSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
