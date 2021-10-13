import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './posts/posts.component';
import { PostViewComponent } from './post-view/post-view.component';
import { FilterPipe } from '../services/filter.pipe';
import { AppRoutingModule } from '../app-routing.module';
import { PostService } from '../services/post.service';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppComponent } from '../app.component';



@NgModule({
  declarations: [
    PostsComponent,
    PostViewComponent,
    FilterPipe,
    AppComponent
  ],
  imports: [
    CommonModule,
    FilterPipe,
    AppRoutingModule,
    FormsModule,
    RouterModule
  ],
  providers: [
    PostService
  ],
  exports:[

  ]
})
export class PostingModule { }
