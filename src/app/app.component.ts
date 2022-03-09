import { Component, OnInit } from '@angular/core';
import { ProductService } from './product/services/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  /** alternate methid
  template: `<h1>{{ title }} {{ 10 + 40 }} {{ sum(10, 20) }}</h1>
    <div>
      <p>{{ product.id }}</p>
      <p>{{ product.name }}</p>
    </div> `, // anything inside double curly braces is considered as javascript
  // syntax is called string interpolation converts output into string
  */
})
export class AppComponent implements OnInit {
  title = 'Mobile Store';

  sum(a: number, b: number): number {
    return a + b;
  }

  CartCount = 0;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService
      .getCartCount()
      .subscribe((val) => (this.CartCount = val));
  }
}
