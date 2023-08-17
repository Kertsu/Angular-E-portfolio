import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AwardsAndHonorsComponent } from './awards-and-honors.component';

describe('AwardsAndHonorsComponent', () => {
  let component: AwardsAndHonorsComponent;
  let fixture: ComponentFixture<AwardsAndHonorsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AwardsAndHonorsComponent]
    });
    fixture = TestBed.createComponent(AwardsAndHonorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
