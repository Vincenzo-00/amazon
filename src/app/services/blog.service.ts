import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post, PostDTO } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http: HttpClient) { }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>("http://localhost:3000/articles");
  }

  getPostsByIdid(id: string): Observable<Post> {
    return this.http.get<Post>("http://localhost:3000/articles/" + id);
  }

  addPost(post: PostDTO) {
    return this.http.post<Post[]>("http://localhost:3000/articles", post)
  }

}
