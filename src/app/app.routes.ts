import { Routes } from '@angular/router';
import { UsersComponent } from './pages/users/users.component';
import { UserDetailComponent } from './pages/user-detail/user-detail.component';
import { PostsComponent } from './pages/posts/posts.component';
import { PostDetailComponent } from './pages/post-detail/post-detail.component';

export const routes: Routes = [
  { path: '', component: UsersComponent },
  { path: 'users/:id', component: UserDetailComponent },
  { path: 'posts', component: PostsComponent },
  { path: 'posts/:id', component: PostDetailComponent }
];
