import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../hello-world-store/state/app-state';
import { Observable, combineLatest } from 'rxjs';
import { selectSelectedGreeting } from '../../hello-world-store/entities/greeting.entity';
import { selectSelectedWorld } from '../../hello-world-store/entities/world.entity';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-instruction',
  templateUrl: './instruction.component.html',
  styleUrls: ['./instruction.component.css']
})
export class InstructionComponent implements OnInit {

  instruction$: Observable<string>;

  constructor(private store: Store<AppState>) { 
    console.log("InstructionComponent | constructor");
  }

  ngOnInit() {
    console.log("InstructionComponent | ngOnInit");

    const greeting$ = this.store.select(selectSelectedGreeting);
    const world$ = this.store.select(selectSelectedWorld);

    this.instruction$ = combineLatest(greeting$,world$).pipe(
      map(([greeting, world]) => {
        if (!greeting) return "Select a Greeting!";
        if (!world) return "Select a World!";
        return null;
      })
    );
  }
}
