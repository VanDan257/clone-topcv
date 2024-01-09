import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TongquanComponent} from "./tongquan/tongquan.component";
import {CvComponent} from "./cv/cv.component";
import {LoaicvComponent} from "./loaicv/loaicv.component";
import {NhanvienComponent} from "./nhanvien/nhanvien.component";
import {NhatuyendungComponent} from "./nhatuyendung/nhatuyendung.component";
import {UngvienComponent} from "./ungvien/ungvien.component";

const routes: Routes = [
  {
    path: '',
    component: TongquanComponent,
  },
  {
    path: 'cv',
    component: CvComponent,
  },
  {
    path: 'loaicv',
    component: LoaicvComponent,
  },
  {
    path: 'nhan-vien',
    component: NhanvienComponent,
  },
  {
    path: 'nha-tuyen-dung',
    component: NhatuyendungComponent,
  },
  {
    path: 'ung-vien',
    component: UngvienComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
