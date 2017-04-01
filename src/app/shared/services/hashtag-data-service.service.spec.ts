/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HashtagDataServiceService } from './hashtag-data-service.service';

describe('HashtagDataServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HashtagDataServiceService]
    });
  });

  it('should ...', inject([HashtagDataServiceService], (service: HashtagDataServiceService) => {
    expect(service).toBeTruthy();
  }));
});
