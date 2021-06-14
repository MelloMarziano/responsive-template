import { MatMenuModule } from '@angular/material/menu';
import { SharedModule } from './../shared/shared/shared.module';
import { LayoutRoutingModule } from './layout-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MainComponent } from './components/main/main.component';
import { HeaderComponent } from './components/header/header.component';
import { LayoutComponent } from './layout.component';
import { FooterComponent } from './components/footer/footer.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ChartsModule } from 'ng2-charts';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';
import { DoughnutChartComponent } from './components/doughnut-chart/doughnut-chart.component';
import { LineChartComponent } from './components/line-chart/line-chart.component';
import {MatTableModule} from '@angular/material/table';




@NgModule({
  declarations: [
    SidebarComponent,
    MainComponent,
    HeaderComponent,
    LayoutComponent,
    FooterComponent,
    BarChartComponent,
    DoughnutChartComponent,
    LineChartComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    SharedModule,
    MatMenuModule,
    MatDialogModule,
    ChartsModule,
    MatTableModule
  ]
})
export class LayoutModule { }
