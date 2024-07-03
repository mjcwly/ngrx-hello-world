// Core imports...
import { createReducer, Action, on } from '@ngrx/store';

// Application imports...
import { initialGreetingState, GreetingState, adapter } from '../entities/greeting.entity';
import * as GreetingActions from '../actions/greeting.actions';

const createGreetingReducer = createReducer(initialGreetingState,
  on(GreetingActions.loadGreetingsSuccess, (state, { response }) => {
    return adapter.setAll(response, state);
  }),

  on(GreetingActions.setSelectedGreeting, (state, { greetingId }) => {
    return { ...state, selectedGreetingId: greetingId };
  }),
);

export function reducer(state: GreetingState | undefined, action: Action) {
  return createGreetingReducer(state, action);
}

