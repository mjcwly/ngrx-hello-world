// Core imports...
import { Injectable } from "@angular/core";

// Third party imports...
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';

// Application imports...
import * as WorldActions from '../actions/world.actions';
import { WorldService } from '../services/world.service';

@Injectable()
export class WorldEffects {
  
  loadWorldsEffect$ = createEffect(() => this.actions$.pipe(
    ofType(WorldActions.loadWorlds),
    switchMap(() => this.worldService.getWorlds().pipe(
      map((response) => WorldActions.loadWorldsSuccess({ response })),
      catchError((error) => of(WorldActions.loadWorldsError({ error })))
    ))
  ));

  constructor(
    private actions$: Actions,
    private worldService: WorldService
  ) { };
}
