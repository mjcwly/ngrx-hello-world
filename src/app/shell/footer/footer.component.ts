// Core imports...
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { 
    console.log("FooterComponent | ngOnInit");
  }

  ngOnInit() {
    console.log("FooterComponent | ngOnInit");
  }

  ngOnChanges() {
    console.log("FooterComponent | ngOnChanges");
  }

  ngDoCheck() {
    console.log("FooterComponent | ngDoCheck")
  }
}
