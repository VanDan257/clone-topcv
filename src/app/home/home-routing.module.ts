import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TrangchuComponent} from "./pages/trangchu/trangchu.component";
import {VieclamComponent} from "./pages/vieclam/vieclam.component";
import {CongtyComponent} from "./pages/congty/congty.component";
import {TintuyendungComponent} from "./pages/tintuyendung/tintuyendung.component";

const routes: Routes = [
  {
    path: '',
    component: TrangchuComponent
  },
  {
    path: 'viec-lam',
    component: VieclamComponent
  },
  {
    path: 'cong-ty',
    component: CongtyComponent
  },
  {
    path: 'tin-tuyen-dung/:id',
    component: TintuyendungComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
