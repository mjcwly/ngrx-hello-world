// Core imports...
import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
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
export class WorldsTableComponent implements OnInit {

  worlds$: Observable<World[]>;
  selectedWorldId$: Observable<number>;

  constructor(
    private store: Store<AppState>
  ) { 
    this.worlds$ = this.store.select(selectAllWorlds);
    this.selectedWorldId$ = this.store.select(selectSelectedWorldId);
  }

  ngOnInit() {
    this.store.dispatch(WorldActions.loadWorlds());
  }

  onWorldClicked(g: World) {
    this.store.dispatch(WorldActions.setSelectedWorld({ worldId: g.worldId }));
  }

}
