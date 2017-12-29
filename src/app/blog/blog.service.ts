  import { Injectable } from '@angular/core';
import { HttpClient} from  '@angular/common/http';

@Injectable()
export class BlogService {
  posts:any ;
  constructor(private http: HttpClient) { }

  getPosts(){
    this.http.get('http://localhost:3000/api/posts').subscribe(data => {
      this.posts = data;
      console.log(this.posts);
    });
  }
  addPost(){
    
  }

}
