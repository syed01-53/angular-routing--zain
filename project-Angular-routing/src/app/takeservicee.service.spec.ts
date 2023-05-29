import { TestBed } from '@angular/core/testing';

import { TakeserviceeService } from './takeservicee.service';

describe('TakeserviceeService', () => {
  let service: TakeserviceeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TakeserviceeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
