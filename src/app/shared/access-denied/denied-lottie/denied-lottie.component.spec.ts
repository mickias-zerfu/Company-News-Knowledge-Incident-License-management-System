import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeniedLottieComponent } from './denied-lottie.component';

describe('DeniedLottieComponent', () => {
  let component: DeniedLottieComponent;
  let fixture: ComponentFixture<DeniedLottieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeniedLottieComponent]
    });
    fixture = TestBed.createComponent(DeniedLottieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
