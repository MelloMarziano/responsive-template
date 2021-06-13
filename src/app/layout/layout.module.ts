import { LayoutRoutingModule } from './layout-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MainComponent } from './components/main/main.component';
import { HeaderComponent } from './components/header/header.component';
import { LayoutComponent } from './layout.component';
import { FooterComponent } from './components/footer/footer.component';



@NgModule({
  declarations: [
    SidebarComponent,
    MainComponent,
    HeaderComponent,
    LayoutComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule
  ]
})
export class LayoutModule { }
