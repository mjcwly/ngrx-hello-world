// Core imports...
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent implements OnInit {

  constructor() { 
    console.log("NavbarComponent | ngOnInit");
  }

  ngOnInit() {
    console.log("NavbarComponent | ngOnInit");
  }

  ngOnChanges() {
    console.log("NavbarComponent | ngOnChanges");
  }

  ngDoCheck() {
    console.log("NavbarComponent | ngDoCheck")
  }

}
