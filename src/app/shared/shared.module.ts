import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './components/menu/menu.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';



@NgModule({
  declarations: [
    MenuComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule
  ],
  exports:[
    MenuComponent //para exportar un componente... primero hay que exportar el componente en el menu y el segundo paso es importarlo en el modulo que quieres usar
  ]
})
export class SharedModule { }
