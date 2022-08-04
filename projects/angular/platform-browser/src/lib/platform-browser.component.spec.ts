import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatformBrowserComponent } from './platform-browser.component';

describe('PlatformBrowserComponent', () => {
  let component: PlatformBrowserComponent;
  let fixture: ComponentFixture<PlatformBrowserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlatformBrowserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlatformBrowserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
