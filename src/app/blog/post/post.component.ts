import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-post',
  templateUrl: 'post.component.html',
  styleUrls: ['post.component.css']
})
export class PostComponent implements OnInit {

  constructor(private  blogService: BlogService) { }

  ngOnInit() {
    this.blogService.getPosts();
  }

}
