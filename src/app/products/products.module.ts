import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { BasicPagesComponent } from './pages/basic-pages/basic-pages.component';
import { NumbersPageComponent } from './pages/numbers-page/numbers-page.component';
import { UncommomPageComponent } from './pages/uncommom-page/uncommom-page.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';


@NgModule({
  declarations: [
    BasicPagesComponent,
    NumbersPageComponent,
    UncommomPageComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    PrimeNgModule
  ]
})
export class ProductsModule { }
