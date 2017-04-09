/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TweetDataService} from './tweet-data-service.service';

describe('TweetDataServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TweetDataService]
    });
  });

  it('should ...', inject([TweetDataService], (service: TweetDataService) => {
    expect(service).toBeTruthy();
  }));
});
