import { Component, OnInit, Output } from '@angular/core';
import { PostModel } from '../models/post.model';
import { PostService } from '../services/post.service';
import { UserModel } from '../models/user.model';
import { UsersService } from '../services/users.service';
import { CommentModel } from '../models/comment.model';
import { Store, select } from '@ngrx/store';
import { PostList } from '../store/posts.action';
import { postIds } from '../store/posts.selector';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {

  posts = this.store.pipe(
    select(postIds)
  )
  users: UserModel[] = [];
  comments: CommentModel[] = [];
  filterPosts: PostModel[] = [];
  searchText: string = '';

  constructor(
    private store: Store<{posts: PostModel[]}>,
    private postService: PostService,
    private userService: UsersService,
  ) {}

  ngOnInit(): void {
    this.postService.getAllPosts().subscribe(
    (posts$ ) => {
      this.store.dispatch(
        PostList({ allPosts: posts$ as PostModel[] })
      )
    }
    )
  }
  //get all posts and users + match users with posts


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
