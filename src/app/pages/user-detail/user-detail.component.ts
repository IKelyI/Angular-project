import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';

import { UserService } from '../../services/user.service';
import { PostService } from '../../services/post.service';
import { User } from '../../models/user.model';
import { Post } from '../../models/post.model';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './user-detail.component.html'
})
export class UserDetailComponent implements OnInit {
  user!: User;
  posts: Post[] = [];
  isLoading = true;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private postService: PostService
  ) {}

  ngOnInit(): void {
    const userId = Number(this.route.snapshot.paramMap.get('id'));

    this.userService.getUserById(userId).subscribe((user: User) => {
    this.user = user;
  });

  this.postService.getPostsByUser(userId).subscribe((posts: Post[]) => {
    this.posts = posts;
    this.isLoading = false;
  });

  }
}
