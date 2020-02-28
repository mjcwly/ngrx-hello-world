// Core imports...
import { Component, OnInit, OnChanges, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-worlds',
  templateUrl: './worlds.component.html',
  styleUrls: ['./worlds.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WorldsComponent implements OnInit, OnChanges {

  constructor() { 
    console.log("WorldsComponent | constructor");
  }

  ngOnInit() {
    console.log("WorldsComponent | ngOnInit");
  }

  ngOnChanges() {
    console.log("WorldsComponent | ngOnChanges");
  }

  ngDoCheck() {
    console.log("WorldsComponent | ngDoCheck")
  }
}
