import { GreetingState } from '../entities/greeting.entity';
import { WorldState } from '../entities/world.entity';

export interface AppState {
  greetingState: GreetingState;
  worldState: WorldState;
}