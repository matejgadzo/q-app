import { Action } from "@ngrx/store";
import { PostModel } from "../../app/models/post.model";
import * as PostActions from "../actions/posts.action";

const initState: PostModel = {
  id: 0,
  title: "Default Title",
  body: "Default Body",
  comments: [],
  userId: 0,
  uName: "Default User"
};

export function postReducer(state: PostModel[] = [initState], action: PostActions.Actions){
  switch(action.type){
    case PostActions.ADD_POSTS:
      return [state, action.payload];
    default:
      return state;
  }
}
