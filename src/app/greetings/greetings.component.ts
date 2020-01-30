// Core imports...
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-greetings',
  templateUrl: './greetings.component.html',
  styleUrls: ['./greetings.component.css']
})
export class GreetingsComponent implements OnInit {

  constructor() { 
    console.log("GreetingsComponent | Constructor");
  }

  ngOnInit() {
    console.log("GreetingsComponent | ngOnInit");
  }
}
