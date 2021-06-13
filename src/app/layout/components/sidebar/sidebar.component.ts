import { Menu } from './../../../models/menu.model';
import { MenuService } from './../../../services/menu.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  menuItems: Menu[] = [];
  constructor(private menuService:MenuService) { }

  ngOnInit(): void {
    this.menuItems = this.menuService.menuItems();
  }

}
