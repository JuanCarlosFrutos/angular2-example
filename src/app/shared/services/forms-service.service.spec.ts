/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FormsServiceService } from './forms-service.service';

describe('FormsServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FormsServiceService]
    });
  });

  it('should ...', inject([FormsServiceService], (service: FormsServiceService) => {
    expect(service).toBeTruthy();
  }));
});
