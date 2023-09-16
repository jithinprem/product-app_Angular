import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingWithParamsFirstComponent } from './routing-with-params-first.component';

describe('RoutingWithParamsFirstComponent', () => {
  let component: RoutingWithParamsFirstComponent;
  let fixture: ComponentFixture<RoutingWithParamsFirstComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoutingWithParamsFirstComponent]
    });
    fixture = TestBed.createComponent(RoutingWithParamsFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
