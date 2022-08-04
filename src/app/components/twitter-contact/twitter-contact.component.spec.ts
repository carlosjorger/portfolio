import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwitterContactComponent } from './twitter-contact.component';

describe('TwitterContactComponent', () => {
  let component: TwitterContactComponent;
  let fixture: ComponentFixture<TwitterContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwitterContactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TwitterContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
