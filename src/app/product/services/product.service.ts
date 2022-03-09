import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import {
  BehaviorSubject,
  interval,
  Observable,
  of,
  Subject,
  throwError,
} from 'rxjs';

import { map, filter, delay, catchError, retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

import { Product } from '../product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private cartCount = 0;

  // private cartCount$ = new Subject<number>();
  private cartCount$ = new BehaviorSubject<number>(0);

  value = of(10, 20, 'string', true, [1, 2, 3, 4], { one: 1, two: 2 });

  myObservable$ = new Observable((observer) => {
    observer.next(10);
    //  throw new Error('error detected');
    // nothing will be printed below this
    observer.next(20);
    //  setTimeout(() => observer.next('print after 3 sec'), 3000);
    // setTimeOut won't be printed because the complete is called earlier
    observer.complete();
    // throw new Error('error detected');
    // this error won't be printed because complete is already printed
    // 40 won't be printed
    observer.next(40);
  });

  newArray$ = of(1, 2, 3, 4, 5);

  myInterval$ = interval(1000);

  constructor(private http: HttpClient) {
    // this.value.subscribe((val) => console.log(val));
    /*
    this.myObservable$.subscribe({
      next: (val) => console.log(val),
      error: (err) => console.error(err),
      complete: () => console.log('observable is complete'),
    });
    */
    /*
    this.newArray$
      .pipe(
        map((val) => val * val),
        filter((val) => val % 2 === 0)
      )
      .subscribe((val) => console.log(val));
      */
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${environment.apiURl}/products.json`).pipe(
      // delay(2000),
      retry(3),
      catchError(this.handleError)
    );
  }

  getProductsById(id: number): Observable<Product | undefined> {
    return this.http.get<Product[]>(`${environment.apiURl}/products.json`).pipe(
      // delay(2000),
      retry(3),
      catchError(this.handleError),
      map((products) => {
        return products.find((p) => p.id === id);
      })
    );
  }

  handleError(error: HttpErrorResponse) {
    let message = '';
    if (error.status === 0) {
      // client side error
      message = `error from client side:${error.error}`;
    } else {
      // server side error
      message = `Server side error : ${error.message}`;
    }
    return throwError(() => new Error(message));
  }

  increementCartCount(): void {
    this.cartCount++;
    this.cartCount$.next(this.cartCount);
    // this.cartCount$.next(++this.cartCount);
    console.log(this.cartCount);
  }

  decreementCartCount(): void {
    this.cartCount--;
    this.cartCount$.next(this.cartCount);
    //  this.cartCount$.next(--this.cartCount);
  }

  getCartCount(): Observable<number> {
    return this.cartCount$.asObservable();
  }
}
