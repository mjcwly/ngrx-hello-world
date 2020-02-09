import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../hello-world-store/state/app-state';
import { Observable, combineLatest, forkJoin } from 'rxjs';
import { selectSelectedGreeting, Greeting } from '../../hello-world-store/entities/greeting.entity';
import { selectSelectedWorld, World } from '../../hello-world-store/entities/world.entity';
import { map, tap, withLatestFrom, filter } from 'rxjs/operators';

@Component({
  selector: 'app-greet-world',
  templateUrl: './greet-world.component.html',
  styleUrls: ['./greet-world.component.css']
})
export class GreetWorldComponent implements OnInit {

  greeting$: Observable<Greeting>;
  world$: Observable<World>;
  helloWorld$: Observable<string>;

  constructor(
    private store: Store<AppState>
  ) { 
    console.log("GreetWorldComponent | constructor");
  }
  
  ngOnInit() {
    console.log("GreetWorldComponent | ngOnInit");

    this.greeting$ = this.store.select(selectSelectedGreeting);
    this.world$ = this.store.select(selectSelectedWorld);
    
    this.helloWorld$ = combineLatest(
      this.greeting$,
      this.world$
    ).pipe(
      tap(([greeting, world]) => {
        console.log("greeting: ", greeting);
        console.log("world: ", world);
      }),
      map(([greeting, world]) => {
        if (!greeting) return "Select a Greeting!";
        if (!world) return "Select a World!";
        return greeting.greetingText + ', ' + world.worldName
      },
    ));
  }

}
