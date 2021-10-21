import { createReducer, on } from '@ngrx/store';
import { PostModel } from '../models/post.model';
import { PostList } from './posts.action';

export const initialState: ReadonlyArray<PostModel> = [];

const _postReducer = createReducer(
  initialState,
  on(PostList, (state, { allPosts }) => {
    return [...allPosts];
  })
);

export function postReducer(state: any, action: any) {
  return _postReducer(state, action);
}
