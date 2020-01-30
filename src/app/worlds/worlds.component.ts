// Core imports...
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-worlds',
  templateUrl: './worlds.component.html',
  styleUrls: ['./worlds.component.css']
})
export class WorldsComponent implements OnInit {

  constructor() { 
    console.log("WorldsComponent | Constructor");
  }

  ngOnInit() {
    console.log("WorldsComponent | ngOnInit");
  }

}
