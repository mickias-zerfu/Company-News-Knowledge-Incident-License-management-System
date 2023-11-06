import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BwProcessServiceComponent } from './bw-process-service.component';

describe('BwProcessServiceComponent', () => {
  let component: BwProcessServiceComponent;
  let fixture: ComponentFixture<BwProcessServiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BwProcessServiceComponent]
    });
    fixture = TestBed.createComponent(BwProcessServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
