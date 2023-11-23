import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LicenseFormComponent } from './license-form.component';

describe('LicenseFormComponent', () => {
  let component: LicenseFormComponent;
  let fixture: ComponentFixture<LicenseFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LicenseFormComponent]
    });
    fixture = TestBed.createComponent(LicenseFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
