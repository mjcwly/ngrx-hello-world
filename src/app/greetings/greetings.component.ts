// Core imports...
import { Component, OnInit, ChangeDetectionStrategy, OnChanges } from '@angular/core';

@Component({
  selector: 'app-greetings',
  templateUrl: './greetings.component.html',
  styleUrls: ['./greetings.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GreetingsComponent implements OnInit, OnChanges {
  
  constructor() { 
    console.log("GreetingsComponent | constructor");
  }
  
  ngOnInit() {
    console.log("GreetingsComponent | ngOnInit");
  }
  
  ngOnChanges() {
    console.log("GreetingsComponent | ngOnChanges");
  }

  ngDoCheck() {
    console.log("GreetingsComponent | ngDoCheck")
  }
}
