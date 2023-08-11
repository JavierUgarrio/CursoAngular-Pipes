import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicPagesComponent } from './pages/basic-pages/basic-pages.component';
import { NumbersPageComponent } from './pages/numbers-page/numbers-page.component';
import { UncommomPageComponent } from './pages/uncommom-page/uncommom-page.component';

const routes: Routes = [
  {
    path: '',
    component: BasicPagesComponent
  },
  {
    path:'numbers',
    component: NumbersPageComponent
  },
  {
    path:'uncommon',
    component:UncommomPageComponent
  },
  {
    path: '**',
    redirectTo:''
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
