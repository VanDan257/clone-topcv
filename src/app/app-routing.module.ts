import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {AdminComponent} from "./admin/admin.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    loadChildren: () =>
        import('./home/home.module').then((m) => m.HomeModule),
  },
  {
    path: "admin",
    component: AdminComponent,
    loadChildren: () =>
        import('./admin/admin.module').then((m) => m.AdminModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
