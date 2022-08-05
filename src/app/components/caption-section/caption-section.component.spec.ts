import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaptionSectionComponent } from './caption-section.component';

describe('CaptionSectionComponent', () => {
  let component: CaptionSectionComponent;
  let fixture: ComponentFixture<CaptionSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaptionSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaptionSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
