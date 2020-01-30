import { GreetingState } from '../entities/greeting.entity';

export interface AppState {
  greetingState: GreetingState;
}