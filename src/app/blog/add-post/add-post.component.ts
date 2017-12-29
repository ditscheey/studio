import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  Validators,
  FormControl,
  FormBuilder
} from "@angular/forms";

import { BlogService } from '../blog.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
  addPostForm: FormGroup;
  
  constructor(
    private fb: FormBuilder,
    private blogService: BlogService,
  ) { }

  ngOnInit() {
    this.addPostForm = this.fb.group({
      title: ["", Validators.required],
      category: ["", Validators.required],
      content: ["", Validators.required]
    });
  }

}
