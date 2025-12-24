import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/users/users.component')
        .then(m => m.UsersComponent)
  },
  {
    path: 'users/:id',
    loadComponent: () =>
      import('./pages/user-detail/user-detail.component')
        .then(m => m.UserDetailComponent)
  },
  {
    path: 'posts',
    loadComponent: () =>
      import('./pages/posts/posts.component')
        .then(m => m.PostsComponent)
  },
  {
    path: 'posts/:id',
    loadComponent: () =>
      import('./pages/post-detail/post-detail.component')
        .then(m => m.PostDetailComponent)
  },
  {
    path: 'products',
    loadComponent: () =>
      import('./pages/products/products.component')
        .then(m => m.ProductsComponent)
  },
  {
    path: 'products/new',
    loadComponent: () =>
      import('./pages/product-create/product-create.component')
        .then(m => m.ProductCreateComponent)
  },
  {
    path: 'products/:id',
    loadComponent: () =>
      import('./pages/product-detail/product-detail.component')
        .then(m => m.ProductDetailComponent)
  }
];
