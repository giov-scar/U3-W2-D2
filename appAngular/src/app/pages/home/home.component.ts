import { Component } from '@angular/core';
import { Post } from 'src/app/Models/post';
import { PostService } from 'src/app/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  newPost: Post = new Post(1, '', '', true);

  constructor(private postSvc: PostService) {}

  getPost(){
    return this.postSvc.getPosts();
  }

  send(){
    this.postSvc.addPost(this.newPost);
  }

}
