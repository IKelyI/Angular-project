import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';

import { PostService } from '../../services/post.service';
import { CommentService } from '../../services/comment.service';
import { UserService } from '../../services/user.service';

import { Post } from '../../models/post.model';
import { Comment } from '../../models/comment.model';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-post-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './post-detail.component.html'
})
export class PostDetailComponent implements OnInit {
  post!: Post;
  comments: Comment[] = [];
  author!: User;
  isLoading = true;

  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
    private commentService: CommentService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    const postId = Number(this.route.snapshot.paramMap.get('id'));

    this.postService.getPostById(postId).subscribe((post: Post) => {
      this.post = post;

      this.userService.getUserById(post.userId).subscribe((user: User) => {
        this.author = user;
      });
    });

    this.commentService.getCommentsByPost(postId).subscribe((comments: Comment[]) => {
      this.comments = comments;
      this.isLoading = false;
    });
  }

}
