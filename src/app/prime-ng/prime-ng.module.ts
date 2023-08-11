import { ButtonModule } from 'primeng/button';
import { NgModule } from '@angular/core';
import { PanelMenuModule } from 'primeng/panelmenu';
import { MenubarModule } from 'primeng/menubar';
import { CardModule } from 'primeng/card';
import { FieldsetModule } from 'primeng/fieldset';
import { PanelModule } from 'primeng/panel';

@NgModule({

  exports:[
    PanelMenuModule,
    MenubarModule,
    ButtonModule,
    CardModule,
    FieldsetModule,
    PanelModule,

  ],

  declarations: [

  ]
})
export class PrimeNgModule { }
