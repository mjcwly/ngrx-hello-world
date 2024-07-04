// Core imports...
import { Component, OnInit, OnChanges } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, combineLatest, map } from 'rxjs';

// Application imports...
import { AppState } from '../../hello-world-store/state/app-state';
import * as WorldActions from '../../hello-world-store/actions/world.actions'
import { World, selectAllWorlds, selectSelectedWorldId } from '../../hello-world-store/entities/world.entity';

@Component({
  selector: 'app-worlds-table',
  templateUrl: './worlds-table.component.html',
  styleUrls: ['./worlds-table.component.scss']
})
export class WorldsTableComponent implements OnInit, OnChanges {

  worlds$: Observable<World[]> = this.store.select(selectAllWorlds);

  selectedWorldId$: Observable<number> = this.store.select(selectSelectedWorldId);

  vm$ = combineLatest([
    this.worlds$,
    this.selectedWorldId$
  ]).pipe(
    map(([worlds, selectedWorldId]) => {
      return { worlds, selectedWorldId };
    })
  );

  constructor(
    private store: Store<AppState>
  ) { 
    console.log("WorldsTableComponent | constructor");
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

  onWorldClicked(w: World, selectedWorldId: number) {
    const newSelectedWorldId = (w.worldId !== selectedWorldId) ? w.worldId : null; 
    this.store.dispatch(WorldActions.setSelectedWorld({ worldId: newSelectedWorldId }));
  }
}
