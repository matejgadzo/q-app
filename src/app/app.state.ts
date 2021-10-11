import { PostModel } from "../app/models/post.model";
import { CommentModel } from "./models/comment.model";
import { UserModel } from "./models/user.model";

export interface AppState{
  readonly posts: PostModel;
  readonly users: UserModel[];
  readonly comments: CommentModel[];
}
