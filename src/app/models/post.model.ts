import { CommentModel } from "./comment.model";

export interface PostModel{
    id: number;
    title: string;
    body: string;
    userId: number;
    uName: string;
    name: string;
    comments: CommentModel[];
}
