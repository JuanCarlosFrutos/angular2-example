/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TweetDataServiceService } from './tweet-data-service.service';

describe('TweetDataServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TweetDataServiceService]
    });
  });

  it('should ...', inject([TweetDataServiceService], (service: TweetDataServiceService) => {
    expect(service).toBeTruthy();
  }));
});
