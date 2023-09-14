import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopbarPrimarychildComponent } from './topbar-primarychild.component';

describe('TopbarPrimarychildComponent', () => {
  let component: TopbarPrimarychildComponent;
  let fixture: ComponentFixture<TopbarPrimarychildComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopbarPrimarychildComponent]
    });
    fixture = TestBed.createComponent(TopbarPrimarychildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
