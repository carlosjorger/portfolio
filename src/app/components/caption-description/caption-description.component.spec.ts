import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaptionDescriptionComponent } from './caption-description.component';

describe('CaptionDescriptionComponent', () => {
  let component: CaptionDescriptionComponent;
  let fixture: ComponentFixture<CaptionDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaptionDescriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaptionDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
