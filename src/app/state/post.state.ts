import { State, Action, StateContext, Selector } from '@ngxs/store';
import { getAllPosts } from '../actions/posts.action';
import { PostService } from '../services/post.service';
import { PostModel } from './../models/post.model'
import { tap } from 'rxjs/operators'
import { Injectable } from '@angular/core';


export class PostStateModel {
    posts!: PostModel[];
}


@State<PostStateModel>({
    name: 'posts',
    defaults: {
        posts: []
    }
})

@Injectable()
export class PostState {

  constructor(private postService: PostService){}

  @Selector()
  static getPosts(state: PostStateModel) {
      return state.posts;
  }

  @Action(getAllPosts)
  getAllPosts({getState, setState}: StateContext<PostStateModel>) {
      return this.postService.getAllPosts().pipe(tap((result) => {
          const state = getState();
          setState({
              ...state,
              posts: result,
          });
      }));
  }
}
