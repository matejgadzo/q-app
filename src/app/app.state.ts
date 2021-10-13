import { PostModel } from "./posting/models/post.model";
import { CommentModel } from "./posting/models/comment.model";
import { UserModel } from "./posting/models/user.model";

export interface AppState{
  readonly posts: PostModel[];
  readonly users: UserModel[];
  readonly comments: CommentModel[];
}
