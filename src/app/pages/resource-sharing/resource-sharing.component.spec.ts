import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceSharingComponent } from './resource-sharing.component';

describe('ResourceSharingComponent', () => {
  let component: ResourceSharingComponent;
  let fixture: ComponentFixture<ResourceSharingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResourceSharingComponent]
    });
    fixture = TestBed.createComponent(ResourceSharingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
