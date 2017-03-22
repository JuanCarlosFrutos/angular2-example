
import { Tweet } from '../models/tweet';
import { User } from '../models/user';

export interface AppStore {
  tweet: Tweet[];
  currentFilter: String;
  users: Array<User>;
  currentUser : User;
  number : Number;
}