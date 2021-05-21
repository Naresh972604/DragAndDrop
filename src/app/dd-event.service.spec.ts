import { TestBed } from '@angular/core/testing';

import { DdEventService } from './dd-event.service';

describe('DdEventService', () => {
  let service: DdEventService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DdEventService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
