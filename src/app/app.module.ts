import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostsComponent } from './posting/posts/posts.component';
import { PostService } from './services/post.service';
import { FilterPipe } from './services/filter.pipe';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { StoreModule } from "@ngrx/store";
import { PostViewComponent } from './posting/post-view/post-view.component';


@NgModule({
  declarations: [
    AppComponent,
    FilterPipe,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    StoreModule.forRoot({}, {})
  ],
  providers: [
    PostService
  ],
  bootstrap: [AppComponent],
  exports:[
    FilterPipe
  ]
})
export class AppModule { }
