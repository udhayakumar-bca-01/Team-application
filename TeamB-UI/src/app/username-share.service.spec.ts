import { TestBed } from '@angular/core/testing';

import { UsernameShareService } from './username-share.service';

describe('UsernameShareService', () => {
  let service: UsernameShareService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsernameShareService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
