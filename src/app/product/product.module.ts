import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductsComponent } from './products/products.component';
import { ReviewFormComponent } from './review-form/review-form.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ProductRoutingModule } from './product-routing.module';

@NgModule({
  declarations: [
    ProductsComponent,
    ProductDetailComponent,
    ReviewFormComponent,
  ],
  imports: [CommonModule, RouterModule, SharedModule, ProductRoutingModule],
})
export class ProductModule {}
