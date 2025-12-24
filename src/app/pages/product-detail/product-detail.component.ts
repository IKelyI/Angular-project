import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup
} from '@angular/forms';
import {
  ActivatedRoute,
  Router,
  RouterModule
} from '@angular/router';

import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';


@Component({
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './product-detail.component.html'
})
export class ProductDetailComponent implements OnInit {
  product!: Product;
  form!: FormGroup;
  isLoading = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.productService.getProductById(id).subscribe(product => {
      this.product = product;
      this.form = this.fb.group({
        title: [product.title],
        description: [product.description],
        price: [product.price],
        stock: [product.stock]
      });
      this.isLoading = false;
    });
  }

  update(): void {
    this.productService
      .updateProduct(this.product.id, this.form.value)
      .subscribe();
  }

  delete(): void {
    this.productService.deleteProduct(this.product.id).subscribe(() => {
      this.router.navigate(['/products']);
    });
  }
}
