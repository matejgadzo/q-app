import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { PostModel } from "../models/post.model";
import { Store } from "../state/post.store";
@Injectable()
export class PostService {

    private url: string = 'https://jsonplaceholder.typicode.com';

    constructor(
        private http: HttpClient,
        private store: Store
    ) {}

    getAllPosts(){
        return this.http.get<PostModel[]>(this.url + "/posts").pipe(
          map((result: PostModel[]) => {
            this.store.updatePosts(result);
            return result;
          }
          )
        );
    }

    getPost(id: number){
        return this.http.get<PostModel>(this.url + "/posts/" + id);
    }
}
