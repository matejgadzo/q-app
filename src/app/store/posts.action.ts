import { createAction, props } from '@ngrx/store';
import { PostModel } from '../models/post.model';

export const PostList = createAction(
    "[POSTS API] all posts retrieved",
    props<{allPosts:PostModel[]}>()
);
