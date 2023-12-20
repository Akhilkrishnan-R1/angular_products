import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from '../../components/spinner/spinner.component';
import { MetaTagService } from '../../services/meta-tag.service';

@Component({
  selector: 'app-single-product',
  standalone: true,
  imports: [CommonModule, SpinnerComponent],
  templateUrl: './single-product.component.html',
  styleUrl: './single-product.component.scss'
})
export class SingleProductComponent implements OnInit {
  public product: any
  loading: Boolean = false
  id: String = ''
  constructor(private productService: ProductService, private activatedRoute: ActivatedRoute, private metaService: MetaTagService) { }
  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id']
    console.log('this.id: ', this.id);
    this.loading = true
    this.productService.getProductById(this.id).subscribe({
      next: (data: any) => {
        console.log('data: ', data);
        this.product = data
        this.loading = false
        this.metaService.setBasicTags(`products | ${this.product.title}`, this.product.description)
        this.metaService.setOpenGraphTags(`products | ${this.product.title}`, this.product.description, "", "", "", this.product.thumbnail, this.product.thumbnail, this.product.title)
        this.metaService.setTwitterTags(`products | ${this.product.title}`, this.product.description, "", this.product.thumbnail, this.product.title)
      }, error: (err) => {
        console.log("errsinglepro", err);
        this.loading = false
      }
    })
  }
}
