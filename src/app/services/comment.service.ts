import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

import { Comment } from '../models/comment.model';

@Injectable({ providedIn: 'root' })
export class CommentService {
  private readonly apiUrl = 'https://dummyjson.com/comments';

  constructor(private http: HttpClient) {}

  getCommentsByPost(postId: number) {
    return this.http
      .get<{ comments: Comment[] }>(`${this.apiUrl}/post/${postId}`)
      .pipe(map(response => response.comments));
  }
}
