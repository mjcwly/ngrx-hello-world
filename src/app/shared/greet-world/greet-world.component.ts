import { Component, OnInit, OnChanges } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../hello-world-store/state/app-state';
import { Observable, combineLatest } from 'rxjs';
import { selectSelectedGreeting } from '../../hello-world-store/entities/greeting.entity';
import { selectSelectedWorld } from '../../hello-world-store/entities/world.entity';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-greet-world',
  templateUrl: './greet-world.component.html',
  styleUrls: ['./greet-world.component.css']
})
export class GreetWorldComponent implements OnInit, OnChanges {

  greetWorldText$: Observable<string>;

  constructor(private store: Store<AppState>) { 
    console.log("GreetWorldComponent | constructor");
  }
  
  ngOnInit() {
    console.log("GreetWorldComponent | ngOnInit");

    const greeting$ = this.store.select(selectSelectedGreeting);
    const world$ = this.store.select(selectSelectedWorld);
    
    this.greetWorldText$ = combineLatest(greeting$,world$).pipe(
      map(([greeting, world]) => {
        if (!greeting) return null;
        if (!world) return null;
        return greeting.greetingText + ', ' + world.worldName
      })
    );
  }

  ngOnChanges() {
    console.log("GreetWorldComponent | ngOnChanges");
  }

  ngDoCheck() {
    console.log("GreetWorldComponent | ngDoCheck")
  }
}
