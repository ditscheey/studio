import { Component, OnInit, ElementRef } from '@angular/core';

declare var jQuery:any;

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {


  imgs:any = [
  "./../../assets/imgs/1.JPG",
  "./../../assets/imgs/2.JPG" ,
  "./../../assets/imgs/3.JPG" ,
  "./../../assets/imgs/4.JPG" ,
  "./../../assets/imgs/5.JPG" ,
  "./../../assets/imgs/6.JPG" ,
  "./../../assets/imgs/7.JPG",
  "./../../assets/imgs/8.JPG" ,
  "./../../assets/imgs/9.JPG" ,
  "./../../assets/imgs/10.JPG" ,
  "./../../assets/imgs/11.JPG" ,
  "./../../assets/imgs/12.JPG"
  ];

  desc:any = [
    'Garten aus der Vogelperspektive',
    'Aussicht des Studios',
    'Aussicht der Terreasse',
    'Aufstieg zur Gallerie',
    'Essbereich',
    'Sitzecke',
    'Gallerie und Essbereich',
    'Schlafbereich',
    'Bad mit Dusche',
    'WC',
    'Aussicht im Winter',
    'Aussicht im Winte 2'
  ];


  constructor(private _elRef: ElementRef) {
  }

  ngOnInit() {
    jQuery (document).ready(function(){
      jQuery('.materialboxed').materialbox();
    });
  }
}
