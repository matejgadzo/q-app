import { Injectable } from '@angular/core';
import { State } from '@ngxs/store';

@State({
  name:'store',
  defaults: []
})
@Injectable()
export class Store {

  private users: any = [];
  private posts: any = [];
  private comments: any = [];

  constructor(){
    this.posts = JSON.parse(localStorage.getItem('posts') || '[]');
    this.users = JSON.parse(localStorage.getItem('users') || '[]');

  }

  getAllPosts(){
    return [...this.posts];
  }

  updatePosts( posts: any ){
    this.posts.current = [...posts];
  }

  getAllUsers(){
    return [...this.users];
  }
  updateUsers(users: any){
    this.users.current = [...users];

  }
}
