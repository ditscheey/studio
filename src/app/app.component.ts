import { Component, ElementRef, OnInit } from '@angular/core';

declare var jQuery:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Studio Murnauer Moos';

  constructor( private _elRef: ElementRef  ){

    }

  ngOnInit(){
    jQuery('button-collapse').sideNav;
  }
}

