// Core imports...
import { createAction, props } from '@ngrx/store';

export const loadWorlds = createAction('[Worlds] LOAD_WORLDS');
export const loadWorldsSuccess = createAction('[Worlds] LOAD_WORLDS_SUCCESS', props<{response: any}>());
export const loadWorldsError = createAction('[Worlds] LOAD_WORLDS_ERROR', props<{error: any}>());

export const setSelectedWorld = createAction('[Worlds] SET_SELECTED_WORLD', props<{ worldId }>());