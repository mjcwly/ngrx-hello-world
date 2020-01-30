// Core imports...
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

// Application imports...
import { AppState } from '../hello-world-store/state/app-state';
import * as GreetingActions from '../hello-world-store/actions/greeting.actions'
import { GreetingService } from '../hello-world-store/services/greeting.service';

@Component({
  selector: 'app-greetings',
  templateUrl: './greetings.component.html',
  styleUrls: ['./greetings.component.css']
})
export class GreetingsComponent implements OnInit {

  constructor(
    private store: Store<AppState>,
    private greetingService: GreetingService
  ) { }

  ngOnInit() {
    this.store.dispatch(GreetingActions.loadGreetings());

    this.store.select(x => x.greetingState).subscribe(x => {
      console.log(x);
    });
  }

}
