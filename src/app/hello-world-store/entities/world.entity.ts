// Core imports...
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from '../state/app-state';

export interface World {
  worldId: number;
  worldName: string;
}

export interface WorldState extends EntityState<World> {
  selectedWorldId: number | null;
}

export function selectWorldId(w: World): number {
  return w.worldId;
}

export function sortByWorldName(w1: World, w2: World): number {
  return w1.worldName.localeCompare(w2.worldName);
}

export const adapter: EntityAdapter<World> = createEntityAdapter<World>({
  selectId: selectWorldId,
  sortComparer: sortByWorldName,
});

export const initialWorldState: WorldState = adapter.getInitialState({
  selectedWorldId: 1
});

const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();

export const selectWorldState = createFeatureSelector<AppState, WorldState>('worldState');

export const selectWorldIds = createSelector(
  selectWorldState,
  selectIds
);

export const selectWorldEntities = createSelector(
  selectWorldState,
  selectEntities
);

export const selectAllWorlds = createSelector(
  selectWorldState,
  selectAll
);

export const selectTotalNumberOfWorlds = createSelector(
  selectWorldState,
  selectTotal
);

export const selectSelectedWorldId = createSelector(
  selectWorldState,
  (state) => state.selectedWorldId
);

export const selectSelectedWorld = createSelector(
  selectWorldEntities,
  selectSelectedWorldId,
  (entities, greetingId) => entities[greetingId]
);