import { TestBed } from '@angular/core/testing';

import { DelayTimeServiceService } from './delay-time-service.service';

describe('DelayTimeServiceService', () => {
  let service: DelayTimeServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DelayTimeServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
