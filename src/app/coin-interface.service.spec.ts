import { TestBed } from '@angular/core/testing';

import { CoinInterfaceService } from './coin-interface.service';

describe('CoinInterfaceService', () => {
  let service: CoinInterfaceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoinInterfaceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
