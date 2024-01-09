import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { HeaderComponent } from './header/header.component';
import { NhanvienComponent } from './nhanvien/nhanvien.component';
import { CvComponent } from './cv/cv.component';
import { LoaicvComponent } from './loaicv/loaicv.component';
import { NhatuyendungComponent } from './nhatuyendung/nhatuyendung.component';
import { TongquanComponent } from './tongquan/tongquan.component';
import { UngvienComponent } from './ungvien/ungvien.component';


@NgModule({
  declarations: [
    AdminComponent,
    HeaderComponent,
    NhanvienComponent,
    CvComponent,
    LoaicvComponent,
    NhatuyendungComponent,
    TongquanComponent,
    UngvienComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
