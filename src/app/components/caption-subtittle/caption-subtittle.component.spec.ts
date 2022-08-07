import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaptionSubtittleComponent } from './caption-subtittle.component';

describe('CaptionSubtittleComponent', () => {
  let component: CaptionSubtittleComponent;
  let fixture: ComponentFixture<CaptionSubtittleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaptionSubtittleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaptionSubtittleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
