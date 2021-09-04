import { Component, OnInit } from '@angular/core';
import { PostModel } from '../models/post.model';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: PostModel[] = [];

  constructor(
    private postService: PostService
    ) { }

  ngOnInit(): void {
    this.postService.getAllPosts().subscribe((data: PostModel[]) => {
      this.posts = data;
    });
  }

}
