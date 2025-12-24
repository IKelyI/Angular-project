import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './products.component.html'
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  isLoading = true;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe(res => {
      this.products = res.products;
      this.isLoading = false;
    });
  }
}
