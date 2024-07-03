// Core imports...
import { Component, OnInit, OnChanges } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

// Application imports...
import { AppState } from '../../hello-world-store/state/app-state';
import * as WorldActions from '../../hello-world-store/actions/world.actions'
import { World, selectAllWorlds, selectSelectedWorldId } from '../../hello-world-store/entities/world.entity';

@Component({
  selector: 'app-worlds-table',
  templateUrl: './worlds-table.component.html',
  styleUrls: ['./worlds-table.component.css']
})
export class WorldsTableComponent implements OnInit, OnChanges {

  worlds$: Observable<World[]>;
  selectedWorldId$: Observable<number>;

  constructor(
    private store: Store<AppState>
  ) { 
    console.log("WorldsTableComponent | constructor");
    this.worlds$ = this.store.select(selectAllWorlds);
    this.selectedWorldId$ = this.store.select(selectSelectedWorldId);
  }

  ngOnInit() {
    console.log("WorldsTableComponent | ngOnInit");
  }

  ngOnChanges() {
    console.log("WorldsTableComponent | ngOnChanges");
  }

  ngDoCheck() {
    console.log("WorldsTableComponent | ngDoCheck")
  }

  onWorldClicked(g: World) {
    this.store.dispatch(WorldActions.setSelectedWorld({ worldId: g.worldId }));
  }

}
