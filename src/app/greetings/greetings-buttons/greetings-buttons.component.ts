import { Component, OnChanges, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, combineLatest, map } from 'rxjs';
import { Greeting, selectAllGreetings, selectSelectedGreetingId } from 'src/app/hello-world-store/entities/greeting.entity';
import { AppState } from 'src/app/hello-world-store/state/app-state';
import * as GreetingActions from '../../hello-world-store/actions/greeting.actions'

@Component({
  selector: 'app-greetings-buttons',
  templateUrl: './greetings-buttons.component.html',
  styleUrl: './greetings-buttons.component.scss'
})
export class GreetingsButtonsComponent implements OnInit, OnChanges {

  greetings$: Observable<Greeting[]> = this.store.select(selectAllGreetings);
  
  selectedGreetingId$: Observable<number> = this.store.select(selectSelectedGreetingId);

  vm$ = combineLatest([
    this.greetings$,
    this.selectedGreetingId$
  ]).pipe(
    map(([greetings, selectedGreetingId]) => {
      return { greetings, selectedGreetingId };
    })
  );

  constructor(
    private store: Store<AppState>
  ) { 
    console.log("GreetingsButtonsComponent | constructor");
  }
  
  ngOnInit() {
    console.log("GreetingsButtonsComponent | ngOnInit");
  }

  ngOnChanges() {
    console.log("GreetingsButtonsComponent | ngOnChanges");
  }

  ngDoCheck() {
    console.log("GreetingsButtonsComponent | ngDoCheck")
  }

  onGreetingClicked(g: Greeting, selectedGreetingId: number) {
    const newSelectedGreetingId = (g.greetingId !== selectedGreetingId) ? g.greetingId : null; 
    this.store.dispatch(GreetingActions.setSelectedGreeting({ greetingId: newSelectedGreetingId }));
  }
}
