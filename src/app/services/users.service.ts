import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserModel } from '../models/user.model';
import { Store } from '../state/post.store';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private url: string = "https://jsonplaceholder.typicode.com/users"
  constructor(
    private http: HttpClient,
    private store: Store
    ) { }

    getAllUsers(){
      return this.http.get<UserModel[]>(this.url).pipe(
        map((result: UserModel[]) => {
          this.store.updateUsers(result);
          return result;
        }
        )
      );
    }

  }
