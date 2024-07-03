// Core imports...
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

// Application imports...
import { AppState } from '../../hello-world-store/state/app-state';
import { selectTotalNumberOfGreetings } from '../../hello-world-store/entities/greeting.entity';

@Component({
  selector: 'app-greetings-count',
  templateUrl: './greetings-count.component.html',
  styleUrls: ['./greetings-count.component.css']
})
export class GreetingsCountComponent {

  totalNumberOfGreetings$: Observable<number>;

  constructor(
    private store: Store<AppState>
  ) { 
    console.log("GreetingsCountComponent | constructor");
    this.totalNumberOfGreetings$ = this.store.select(selectTotalNumberOfGreetings)
  }

  ngOnInit() {
    console.log("GreetingsCountComponent | ngOnInit");
  }

  ngOnChanges() {
    console.log("GreetingsCountComponent | ngOnChanges");
  }

  ngDoCheck() {
    console.log("GreetingsCountComponent | ngDoCheck")
  }
}
