import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {


  constructor(private fb: FormBuilder,) {

  }

  onSubmit(){
    console.log("Submit: ");
  }

  ngOnInit() {
  }

}
