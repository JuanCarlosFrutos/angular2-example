/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HashtagDataService } from './hashtag-data-service.service';

describe('HashtagDataServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HashtagDataService]
    });
  });

  it('should ...', inject([HashtagDataService], (service: HashtagDataService) => {
    expect(service).toBeTruthy();
  }));
});
