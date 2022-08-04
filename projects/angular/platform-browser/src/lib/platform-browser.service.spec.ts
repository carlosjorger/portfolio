import { TestBed } from '@angular/core/testing';

import { PlatformBrowserService } from './platform-browser.service';

describe('PlatformBrowserService', () => {
  let service: PlatformBrowserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlatformBrowserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
