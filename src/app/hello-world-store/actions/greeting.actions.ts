// Core imports...
import { createAction, props } from '@ngrx/store';

export const loadGreetings = createAction('[Greetings] LOAD_GREETINGS');
export const loadGreetingsSuccess = createAction('[Greetings] LOAD_GREETINGS_SUCCESS', props<{response: any}>());
export const loadGreetingsError = createAction('[Greetings] LOAD_GREETINGS_ERROR', props<{error: any}>());