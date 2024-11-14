import { Component, OnInit } from '@angular/core';
import { Post } from '../../models/post';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrl: './posts-list.component.css'
})
export class PostsListComponent implements OnInit {
  post: Post[] = [];

  constructor(public blogService: BlogService) { }
  ngOnInit(): void {
    this.blogService.getPosts().subscribe(dati => {
      this.post = dati
    });
  }
}
