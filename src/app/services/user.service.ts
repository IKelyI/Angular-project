import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

import { User } from '../models/user.model';

@Injectable({ providedIn: 'root' })
export class UserService {
  private readonly apiUrl = 'https://dummyjson.com/users';

  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get<{ users: User[] }>(this.apiUrl)
      .pipe(map(response => response.users));
  }

  getUserById(id: number) {
    return this.http.get<User>(`${this.apiUrl}/${id}`);
  }
}
