/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { NumVerifingService } from './num-verifing.service';

describe('NumVerifingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NumVerifingService]
    });
  });

  it('should ...', inject([NumVerifingService], (service: NumVerifingService) => {
    expect(service).toBeTruthy();
  }));
});
