import { Component } from '@angular/core';
import { MenuItem} from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  public menuItems: MenuItem[] = [];

  ngOnInit() {
      this.menuItems = [
          {
            label: 'Pipes de Angular',
            icon: 'pi pi-desktop',
            items:[
              {

                label: 'Textos y Fechas',
                icon: 'pi pi-dollar',
                routerLink: '/',

              },
              {
                label: 'Numeros',
                icon: 'pi pi-cog',
                routerLink:'numbers'
              },
              {
                label: 'No comunes',
                icon: 'pi pi-globe',
                routerLink: 'uncommon',
              },
            ]

          },

          {
            label: 'Pipes Personalizados',
            icon: ' pi pi-cog',
            items:[
              {
                label: 'Otros',
                icon:'pi pi-cog',
              }


            ]

          }

      ];
  }
}
