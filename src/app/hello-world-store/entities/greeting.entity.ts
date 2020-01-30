// Core imports...
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

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

