import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from '../product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  product$!: Observable<Product | undefined>;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private router: Router
  ) {}

  ngOnInit(): void {
    /*
    const id = Number(this.route.snapshot.paramMap.get('id'));
    // snapshot should be only when you capturing the id first time

    // const id = +this.route.snapshot.paramMap.get('id')!;
    // you can handle null by using exclamaition
    console.log(id);
    if (!isNaN(id)) {
      this.product$ = this.productService.getProductsById(id);
    }
*/
    this.route.paramMap.subscribe((params) => {
      const id = Number(this.route.snapshot.paramMap.get('id'));
      console.log(params.get('id'));
      if (!isNaN(id)) {
        this.product$ = this.productService.getProductsById(id);
      }
    });
  }

  goback(): void {
    this.router.navigate(['/products']);
  }
}
