import { MenuDialogComponent } from './../../../shared/menu-dialog/menu-dialog.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog() {
    this.dialog.open(MenuDialogComponent, {
      width: '300px',
      height: '100vh',
      position: { right: '0'}

    });
  }

}
