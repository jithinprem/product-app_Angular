import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplatestatementComponent } from './templatestatement.component';

describe('TemplatestatementComponent', () => {
  let component: TemplatestatementComponent;
  let fixture: ComponentFixture<TemplatestatementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TemplatestatementComponent]
    });
    fixture = TestBed.createComponent(TemplatestatementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
