import { createSelector } from '@ngrx/store';
import { PostModel } from '../models/post.model';
import { PostList } from './posts.action';

import { AppState } from './posts.state';

export const postSelector =(state: AppState) => state.posts;

export const postIds = createSelector(
  postSelector,
  (posts: PostModel[]) => {
    return [...new Set(posts.map((_) => _.id))];
  }
);

