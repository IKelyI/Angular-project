import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PostService } from '../../services/post.service';
import { UserService } from '../../services/user.service';
import { Post } from '../../models/post.model';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './posts.component.html'
})
export class PostsComponent implements OnInit {
  posts: Post[] = [];
  users: User[] = [];
  isLoading = true;

  constructor(
    private postService: PostService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.postService.getPosts().subscribe((posts: Post[]) => {
    this.posts = posts;
    this.isLoading = false;
  });

  this.userService.getUsers().subscribe((users: User[]) => {
    this.users = users;
  });

  }

  getAuthorName(userId: number): string {
    const user = this.users.find(u => u.id === userId);
    return user ? `${user.firstName} ${user.lastName}` : 'Unknown';
  }

}
