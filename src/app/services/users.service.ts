import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserModel } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private url: string = "https://jsonplaceholder.typicode.com/users"
  constructor(
    private http: HttpClient
    ) { }

    getAllUsers(): Observable<UserModel[]> {
      return this.http.get<UserModel[]>(this.url);
    }
  }
