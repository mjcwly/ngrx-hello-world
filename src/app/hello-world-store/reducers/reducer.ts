// Core imports...
import { ActionReducerMap } from '@ngrx/store';

// Application imports...
import * as GreetingReducer from '../../hello-world-store/reducers/greeting.reducer'
import * as WorldReducer from '../../hello-world-store/reducers/world.reducer'
import { AppState } from '../state/app-state';

export const reducers: ActionReducerMap<AppState> = {
  greetingState: GreetingReducer.reducer,
  worldState: WorldReducer.reducer,
};