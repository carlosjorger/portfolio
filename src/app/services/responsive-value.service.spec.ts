import { TestBed } from '@angular/core/testing';

import { ResponsiveValueService } from './responsive-value.service';

describe('ResponsiveValueService', () => {
  let service: ResponsiveValueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResponsiveValueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
