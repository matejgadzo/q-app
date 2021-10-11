import { Injectable } from '@angular/core'
import { Action } from '@ngrx/store'
import { PostModel } from '../models/post.model'

export const ADD_POSTS = '[POSTS] Add';
export const REMOVE_POST = '[POSTS] Remove';

export class AddPosts implements Action{
  readonly type = ADD_POSTS;

  constructor(public payload: PostModel){

  }
}

export class RemovePosts implements Action{
  readonly type = REMOVE_POST;

  constructor(public payload: number){

  }
}

export type Actions = AddPosts | RemovePosts;
