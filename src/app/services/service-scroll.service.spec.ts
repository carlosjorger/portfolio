import { TestBed } from '@angular/core/testing';

import { ServiceScrollService } from './service-scroll.service';

describe('ServiceScrollService', () => {
  let service: ServiceScrollService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceScrollService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
