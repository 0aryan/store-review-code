import { isLoweredSymbol } from '@angular/compiler';
import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { bindCallback, Subject, Subscription, takeUntil } from 'rxjs';
import { Category, Product } from '../product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  // providers:[ProductService] // componenet level services not recommended
})
export class ProductsComponent implements OnInit {
  classList = {
    'class-1': true,
    'class-2': false,
  };

  styleList = {
    color: '#ffffff',
    border: '1px solid black',
  };

  /*

  imageStyleList = {
    'height.rem': 17,
    'width.rem': 18,
  };
 */

  startIndex = 0;

  endIndex = 6;
  /*

  categories = [
    Category.Mobile,
    Category.Tv,
    Category.WashingMachine,
    Category.Watch,
  ];

  */

  categories = Object.values(Category);

  counter = 0;

  // subscription$!: Subscription;

  //  unsubscription$ = new Subject();

  loading = false;

  errorMessage = null;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    /*
    this.subscription$ = this.productService.myInterval$.subscribe({
      next: (val) => (this.counter = val),
      error: (err) => console.log(err),
      complete: () => console.log('complete'),
    });
    */
    /*

    this.productService.myInterval$
      .pipe(takeUntil(this.unsubscription$))
      .subscribe((val) => console.log('subscription 1', val));
    this.productService.myInterval$
      .pipe(takeUntil(this.unsubscription$))
      .subscribe((val) => console.log('subscription 2', val));
    this.productService.myInterval$
      .pipe(takeUntil(this.unsubscription$))
      .subscribe((val) => console.log('subscription 3', val));
      */

    this.loading = true;

    this.errorMessage = null;

    this.productService.getProducts().subscribe({
      next: (val) => {
        this.loading = false;
        this.products = val;
        this.filteredProducts = val;
      },
      error: (err) => {
        this.loading = false;
        console.log(err);
        this.errorMessage = err;
      },
    });
  }
  /*
  unsubscribeCounter(): void {
    if (this.subscription$) {
      this.subscription$.unsubscribe();
    }

    this.unsubscription$.next(0);
    this.unsubscription$.unsubscribe();
  }
*/
  incrementCounter(): void {}

  products: Product[] = [];

  filteredProducts = this.products;

  selectedCategory: any = 'all';

  // private variable

  private _searchValue = '';

  // setter and getters search value

  get searchValue(): string {
    return this._searchValue;
  }

  set searchValue(value: string) {
    this._searchValue = value;
    this.filteredProducts = this.products.filter((product) =>
      product.name.toLocaleLowerCase().includes(value.toLocaleLowerCase())
    );
  }

  // private variable for range finder

  private _rangeFinder: Number = 0;

  get rangeFinder(): Number {
    return this._rangeFinder;
  }

  set rangeFinder(value: any) {
    this._rangeFinder = value;
    this.filteredProducts = this.products.filter(
      (product) => product.price >= value * 20000
    );
  }

  // click me function

  clickMe(event: MouseEvent): void {
    console.log('you clicked me', event);
  }

  // filter products
  // question mark is an optional thing

  filterProducts(category?: string): void {
    //  this.selectedCategory = category || 'All';
    this.selectedCategory = category ? category : 'All';

    this.filteredProducts = category
      ? this.products.filter((product) => product.category === category)
      : this.products;
    console.log(this.filteredProducts);
  }

  firstPage(): void {
    this.startIndex = 0;
    this.endIndex = 2;
  }

  secondPage(): void {
    this.startIndex = 2;
    this.endIndex = 4;
  }

  thirdPage(): void {
    this.startIndex = 4;
    this.endIndex = 6;
  }

  // search products
  /*
  searchProducts(event: any): void {
    // const inputEvent = event as InputEvent;
    console.log(event.target.value);
    this.searchValue = event.target.value;
  }
  */

  onRatingClick(event: number): void {
    console.log('on click rating()', event);
  }

  addToCart(): void {
    this.productService.increementCartCount();
  }
}
