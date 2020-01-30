// Core imports...
import { Injectable } from "@angular/core";

// Third party imports...
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';

// Application imports...
import * as GreetingActions from '../actions/greeting.actions';
import { GreetingService } from '../services/greeting.service';

@Injectable()
export class GreetingEffects {
  
  loadGreetingsEffect$ = createEffect(() => this.actions$.pipe(
    ofType(GreetingActions.loadGreetings),
    switchMap(() => this.greetingService.getGreetings().pipe(
      map((response) => GreetingActions.loadGreetingsSuccess({ response })),
      catchError((error) => of(GreetingActions.loadGreetingsError({ error })))
    ))
  ));

  constructor(
    private actions$: Actions,
    private greetingService: GreetingService
  ) { };
}
