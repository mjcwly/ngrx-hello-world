// Core imports...
import { Component, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-greetings',
  templateUrl: './greetings.component.html',
  styleUrls: ['./greetings.component.css']
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
