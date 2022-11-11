import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductGridComponent } from './product-grid.component';



@NgModule({
  declarations: [
    ProductGridComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ProductGridComponent
  ]
})
export class ProductGridModule { }
