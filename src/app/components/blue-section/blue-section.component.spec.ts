import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlueSectionComponent } from './blue-section.component';

describe('BlueSectionComponent', () => {
  let component: BlueSectionComponent;
  let fixture: ComponentFixture<BlueSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlueSectionComponent]
    });
    fixture = TestBed.createComponent(BlueSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
