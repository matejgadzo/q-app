import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CommentModel } from '../posting/models/comment.model';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  private url: string = 'https://jsonplaceholder.typicode.com/comments'
  constructor(
    private http: HttpClient
  ) { }

  getComments(id: number): Observable<CommentModel[]> {
    return this.http.get<CommentModel[]>(this.url + "?postId=" + id);
  }
}
