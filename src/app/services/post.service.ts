import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

import { Post } from '../models/post.model';

@Injectable({ providedIn: 'root' })
export class PostService {
  private readonly apiUrl = 'https://dummyjson.com/posts';

  constructor(private http: HttpClient) {}

  getPosts() {
    return this.http.get<{ posts: Post[] }>(this.apiUrl)
      .pipe(map(response => response.posts));
  }

  getPostById(id: number) {
    return this.http.get<Post>(`${this.apiUrl}/${id}`);
  }

  getPostsByUser(userId: number) {
    return this.http.get<{ posts: Post[] }>(`${this.apiUrl}/user/${userId}`)
      .pipe(map(response => response.posts));
  }
}
