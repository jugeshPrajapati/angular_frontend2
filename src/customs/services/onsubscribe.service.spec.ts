import { TestBed } from '@angular/core/testing';

import { OnsubscribeService } from './onsubscribe.service';

describe('OnsubscribeService', () => {
  let service: OnsubscribeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OnsubscribeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
