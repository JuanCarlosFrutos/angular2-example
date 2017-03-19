
import { Tweet } from '../models/tweet';

export interface AppStore {
  tweet: Tweet[];
  currentFilter: String;
}