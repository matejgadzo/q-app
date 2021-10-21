import { Component, OnInit, Output } from '@angular/core';
import { PostModel } from '../models/post.model';
import { PostService } from '../services/post.service';
import { UserModel } from '../models/user.model';
import { UsersService } from '../services/users.service';
import { CommentModel } from '../models/comment.model';
import { PostState } from '../state/post.state';
import {Select, Store} from '@ngxs/store';
import { Observable } from 'rxjs';
import { getAllPosts } from '../actions/posts.action';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  // @Output()
  // post!: PostModel;

  @Select(PostState.getPosts)
  posts!: Observable<PostModel[]>;


  // posts: PostModel[] = [];
  // users: UserModel[] = [];
  // comments: CommentModel[] = [];
  // filterPosts: PostModel[] = [];
  searchText: string = '';

  constructor(
    private postService: PostService,
    private userService: UsersService,
    private store: Store
  ) {}

  ngOnInit(): void {
    //this.getData();
    this.store.dispatch(new getAllPosts());
  }
  //get all posts and users + match users with posts

  // getData() {
  //   this.postService.getAllPosts().subscribe((data: PostModel[]) => {
  //     this.posts = data;
  //     this.attributeUser();

  //   });
  //   this.userService.getAllUsers().subscribe((data: UserModel[]) => {
  //     this.users = data;
  //     this.attributeUser();
  //   });
  // }

  //match userId with userName
  // attributeUser() {
  //   for (const post of this.posts) {
  //     for (const user of this.users) {
  //       if (post.userId === user.id) {
  //         post.uName = user.name;
  //       }
  //     }
  //   }
  // }
}
