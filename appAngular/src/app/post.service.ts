import { Injectable } from '@angular/core';
import { Post } from './Models/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  posts:Post[] = []

  constructor() { }

  addPost(post:Post): void{
    this.posts.push(post);
  }

  getPosts(): Post[] {
    return this.posts;
  }

}
