import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { CommentModel } from '../models/comment.model';
import { PostModel } from '../models/post.model';
import { CommentsService } from '../../services/comments.service';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-post-view',
  templateUrl: './post-view.component.html',
  styleUrls: ['./post-view.component.css']
})
export class PostViewComponent implements OnInit {
  @Input()
  post!: PostModel;

  postId!: number;
  comments: CommentModel[] = [];
  routeSub!: Subscription;

  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
    private commentService: CommentsService
  ) { }

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      this.postId = params['id'];
    });
    this.getPost();
    this.getComments();
  }

  // get post data
  getPost(){
    this.postService.getPost(this.postId).subscribe((data) =>{
      this.post = data;
    });
  }
  // get all comments with post id
  getComments(){
    this.commentService.getComments(this.postId).subscribe((data) =>{
      this.comments = data;
    });
  }



}
