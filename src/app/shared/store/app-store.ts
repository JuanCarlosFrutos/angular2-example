
import { Tweet } from '../models/tweet';
import { User } from '../models/user';
import { Hashtag } from '../models/hashtag';

export interface AppStore {
  tweet : Tweet[];
  users : User[];
  currentUser : User;
  hashtags : Hashtag[];
}