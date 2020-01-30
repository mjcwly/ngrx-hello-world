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

export function selectUserId(a: Greeting): number {
  return a.greetingId;
}

export function sortByName(a: Greeting, b: Greeting): number {
  return a.greetingText.localeCompare(b.greetingText);
}

export const adapter: EntityAdapter<Greeting> = createEntityAdapter<Greeting>({
  selectId: selectUserId,
  sortComparer: sortByName,
});

export const initialGreetingState: GreetingState = adapter.getInitialState({
  selectedGreetingId: null
});

const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();

export const selectGreetingState = createFeatureSelector<AppState, GreetingState>('greetingState');
// export const selectGreetingState = (state: AppState) => state.greetingState;

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

export const selectSelectedGreetingId = createSelector(
  selectGreetingState,
  (state) => state.selectedGreetingId
);