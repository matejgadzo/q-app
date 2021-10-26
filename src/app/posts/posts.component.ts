import { AfterViewInit, Component, OnInit } from '@angular/core';
import { PostModel } from '../models/post.model';
import { PostService } from '../services/post.service';
import { UserModel } from '../models/user.model';
import { UsersService } from '../services/users.service';
import { Store } from '../state/post.store';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit  {

  posts: PostModel[] = [];
  users: UserModel[] = [];

  searchText: string = '';

  constructor(
    private postService: PostService,
    private userService: UsersService,
    private store: Store
  ) {}

  ngOnInit(): void {
    //this.getData();
    if(this.store.getAllPosts().length === 0){
      this.postService.getAllPosts().subscribe(res =>{
        localStorage.setItem('posts', JSON.stringify(res));
        this.posts = res;
      })
      if(this.store.getAllUsers().length ===0){
        this.userService.getAllUsers().subscribe(use =>{
          localStorage.setItem('users', JSON.stringify(use));
          this.users = use;
        })
      }
      this.attributeUser();
    }else {
      this.posts = this.store.getAllPosts();
      this.users = this.store.getAllUsers();
      this.attributeUser();
    }
  }

  //match userId with userName
  attributeUser() {
      for(let post of this.posts){
        for(let user of this.users){
          if(post.id === user.id){
            post.uName = user.username;
            post.name = user.name;
          }
        }
      }
      console.log(this.posts);
    }
}
