
import { Tweet } from '../models/tweet';
import { User } from '../models/user';
import { Hashtag } from '../models/hashtag';

export interface AppStore {
  tweets 	 : Tweet[];
  users 	 : User[];
  userLogged : User;
  hashtags   : Hashtag[];
}