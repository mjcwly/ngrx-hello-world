import { Component, OnChanges, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, combineLatest, map } from 'rxjs';
import { World, selectAllWorlds, selectSelectedWorldId } from 'src/app/hello-world-store/entities/world.entity';
import { AppState } from 'src/app/hello-world-store/state/app-state';
import * as WorldActions from '../../hello-world-store/actions/world.actions'

@Component({
  selector: 'app-worlds-buttons',
  templateUrl: './worlds-buttons.component.html',
  styleUrl: './worlds-buttons.component.scss'
})
export class WorldsButtonsComponent implements OnInit, OnChanges {

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
    console.log("WorldsButtonsComponent | constructor");
  }
  
  ngOnInit() {
    console.log("WorldsButtonsComponent | ngOnInit");
  }

  ngOnChanges() {
    console.log("WorldsButtonsComponent | ngOnChanges");
  }

  ngDoCheck() {
    console.log("WorldsButtonsComponent | ngDoCheck")
  }

  onWorldClicked(g: World, selectedWorldId: number) {
    const newSelectedWorldId = (g.worldId !== selectedWorldId) ? g.worldId : null; 
    this.store.dispatch(WorldActions.setSelectedWorld({ worldId: newSelectedWorldId }));
  }
}
