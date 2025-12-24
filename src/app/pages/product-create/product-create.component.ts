import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup
} from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';

@Component({
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './product-create.component.html'
})
export class ProductCreateComponent {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private router: Router
  ) {
    this.form = this.fb.group({
      title: [''],
      description: [''],
      price: [0],
      stock: [0]
    });
  }

  create(): void {
    const product: Partial<Product> = this.form.value;

    this.productService.createProduct(product).subscribe(() => {
      this.router.navigate(['/products']);
    });
  }
}
