/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CanActivateServiceService } from './can-activate-service.service';

describe('CanActivateServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CanActivateServiceService]
    });
  });

  it('should ...', inject([CanActivateServiceService], (service: CanActivateServiceService) => {
    expect(service).toBeTruthy();
  }));
});
