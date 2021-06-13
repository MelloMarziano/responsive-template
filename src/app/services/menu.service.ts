import { Menu } from './../models/menu.model';
import { Injectable } from '@angular/core';

const MenuItems = [
  {
    icon: "fas fa-home",
    displayName: 'Home',
    route: '/Home'
  },
  {
    icon: "fas fa-user",
    displayName: 'Clients',
    route: '/item-2'
  },
  {
    icon: "fas fa-user-friends",
    displayName: 'Project teams',
    route: '/item-3'
  },
  {
    icon: "fas fa-clock",
    displayName: 'Time trackings',
    route: '/item-3'
  },
  {
    icon: "fas fa-clock",
    displayName: 'Time trackings',
    route: '/item-3'
  }
];

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  menu: Menu[] = MenuItems;
  constructor() { }

  menuItems(){
    return this.menu;
  }


}
