// Core imports...
import { createReducer, Action, on } from '@ngrx/store';

// Application imports...
import { initialWorldState, WorldState, adapter } from '../entities/world.entity';
import * as WorldActions from '../actions/world.actions';

const createWorldReducer = createReducer(initialWorldState,
  on(WorldActions.loadWorldsSuccess, (state, { response }) => {
    return adapter.addAll(response, state);
  }),

  on(WorldActions.setSelectedWorld, (state, { worldId }) => {
    return { ...state, selectedWorldId: worldId };
  }),
);

export function reducer(state: WorldState | undefined, action: Action) {
  return createWorldReducer(state, action);
}

