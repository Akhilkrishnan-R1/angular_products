import { Component, OnInit, inject } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from '../../components/spinner/spinner.component';
import { MetaTagService } from '../../services/meta-tag.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, SpinnerComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit {
  constructor(private productService: ProductService, private router: Router, private metaService: MetaTagService) { }
  products: any[] = []
  loading: Boolean = false

  ngOnInit(): void {
    this.loading = true
    this.productService.getAllProducts().subscribe({
      next: (data: any) => {
        this.products = data.products;
        console.log('this.products: ', this.products);
        this.loading = false;
      },
      error: (error) => {
        this.loading = false;
      }
    });
    this.metaService.setBasicTags("products", "this is a dummy page")
    this.metaService.setOpenGraphTags("products", "this is a dummy page", "", "", "dummy", "", "", "img", "", "", "")
    this.metaService.setTwitterTags("products", "this is a dummy page","", "", "")
  }

  viewProduct(id: string) {
    this.router.navigate([`/product/${id}`])
  }
}
