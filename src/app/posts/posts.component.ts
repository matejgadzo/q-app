import { Component, OnInit } from '@angular/core';
import { PostModel } from '../models/post.model';
import { PostService } from '../services/post.service';
import { FilterPipe } from '../services/filter.pipe';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: PostModel[] = [];
  filterPosts: PostModel[] = [];
  searchText: string = '';

  constructor(
    private postService: PostService
    ) { }

  ngOnInit(): void {
    this.postService.getAllPosts().subscribe((data: PostModel[]) => {
      this.posts = data;
      console.log(this.posts)
    });
  }

  public filter(){
    this.filterPosts = this.posts.filter(item => (item.body || item.title));
    console.log(this.filterPosts);
  }
}
