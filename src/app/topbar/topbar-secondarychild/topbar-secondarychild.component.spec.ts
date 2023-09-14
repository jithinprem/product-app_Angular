import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopbarSecondarychildComponent } from './topbar-secondarychild.component';

describe('TopbarSecondarychildComponent', () => {
  let component: TopbarSecondarychildComponent;
  let fixture: ComponentFixture<TopbarSecondarychildComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopbarSecondarychildComponent]
    });
    fixture = TestBed.createComponent(TopbarSecondarychildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
