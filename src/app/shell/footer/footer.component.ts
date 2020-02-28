// Core imports...
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
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
