
import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { PostModel } from "../models/post.model";

@Injectable()
export class PostService {

    private url: string = 'https://jsonplaceholder.typicode.com/posts';
    
    constructor(
        private http: HttpClient
    ) {}

    getAllPosts(): Observable<PostModel[]> {
        return this.http.get<PostModel[]>(this.url);
    }

    getPost(id: number): Observable<PostModel> {
        return this.http.get<PostModel>(this.url + "/" + id);
    }
}