import { Component } from '@angular/core';
import { PostDTO } from '../../models/post';
import { BlogService } from '../../services/blog.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-add',
  templateUrl: './post-add.component.html',
  styleUrl: './post-add.component.css'
})
export class PostAddComponent {

  //TEMPLATE DRIVEN FORM
  model: PostDTO = new PostDTO();

  constructor(public blogService: BlogService, private router: Router) {

  }

  aggiungiPost() {
    this.blogService.addPost(this.model).subscribe(dati => {
      this.router.navigate(['/articoli'])
      this.model = new PostDTO;
    }

    )
  }
}
