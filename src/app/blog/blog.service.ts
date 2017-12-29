  import { Injectable } from '@angular/core';
import { HttpClient} from  '@angular/common/http';

@Injectable()
export class BlogService {
  posts:any ;
  constructor(private http: HttpClient) { }

  getPosts(){
    this.http.get('http://159.89.19.33/posts').subscribe(data => {
      this.posts = data;
      console.log(this.posts);
    });
  }
  addPost(){
    
  }

}
