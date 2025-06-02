import { TestBed } from '@angular/core/testing';

import { PotterApiService } from './potter-api.service';

describe('PotterApiService', () => {
  let service: PotterApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PotterApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
