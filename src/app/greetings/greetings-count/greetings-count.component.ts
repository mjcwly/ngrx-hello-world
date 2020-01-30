// Core imports...
import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
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
    this.totalNumberOfGreetings$ = this.store.select(selectTotalNumberOfGreetings)
  }
}
