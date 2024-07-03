// Core imports...
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

// Application imports...
import { AppState } from '../../hello-world-store/state/app-state';
import { selectTotalNumberOfWorlds } from '../../hello-world-store/entities/world.entity';

@Component({
  selector: 'app-worlds-count',
  templateUrl: './worlds-count.component.html',
  styleUrls: ['./worlds-count.component.css']
})
export class WorldsCountComponent {

  totalNumberOfWorlds$: Observable<number>;

  constructor(
    private store: Store<AppState>
  ) { 
    console.log("WorldsCountComponent | constructor");
    this.totalNumberOfWorlds$ = this.store.select(selectTotalNumberOfWorlds)
  }

  ngOnInit() {
    console.log("WorldsCountComponent | ngOnInit");
  }

  ngOnChanges() {
    console.log("WorldsCountComponent | ngOnChanges");
  }

  ngDoCheck() {
    console.log("WorldsCountComponent | ngDoCheck")
  }
}
