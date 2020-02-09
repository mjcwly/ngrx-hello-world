// Core imports...
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from '../state/app-state';

export interface Greeting {
  greetingId: number;
  greetingText: string;
}

export interface GreetingState extends EntityState<Greeting> {
  selectedGreetingId: number | null;
}

export function selectGreetingId(g: Greeting): number {
  return g.greetingId;
}

export function sortByGreetingText(g1: Greeting, g2: Greeting): number {
  return g1.greetingText.localeCompare(g2.greetingText);
}

export const adapter: EntityAdapter<Greeting> = createEntityAdapter<Greeting>({
  selectId: selectGreetingId,
  sortComparer: sortByGreetingText,
});

export const initialGreetingState: GreetingState = adapter.getInitialState({
  selectedGreetingId: 1
});

const { selectIds, selectEntities, selectAll, selectTotal } = adapter.getSelectors();

export const selectGreetingState = createFeatureSelector<AppState, GreetingState>('greetingState');

export const selectGreetingIds = createSelector(
  selectGreetingState,
  selectIds
);

export const selectGreetingEntities = createSelector(
  selectGreetingState,
  selectEntities
);

export const selectAllGreetings = createSelector(
  selectGreetingState,
  selectAll
);

export const selectTotalNumberOfGreetings = createSelector(
  selectGreetingState,
  selectTotal
);

export const selectSelectedGreetingId = createSelector(
  selectGreetingState,
  (state) => state.selectedGreetingId
);

export const selectSelectedGreeting = createSelector(
  selectGreetingEntities,
  selectSelectedGreetingId,
  (entities, greetingId) => entities[greetingId]
);