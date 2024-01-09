import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { FooterComponent } from "./shared/footer/footer.component";
import {HeaderComponent} from "./shared/header/header.component";
import {TrangchuComponent} from "./pages/trangchu/trangchu.component";
import {VieclamComponent} from "./pages/vieclam/vieclam.component";
import { TintuyendungComponent} from "./pages/tintuyendung/tintuyendung.component";
import {CongtyComponent} from "./pages/congty/congty.component";

@NgModule({
    declarations: [
        HomeComponent,
        FooterComponent,
        HeaderComponent,
        TrangchuComponent,
        VieclamComponent,
        TintuyendungComponent,
        CongtyComponent
    ],
    exports: [
        HeaderComponent
    ],
    imports: [
        CommonModule,
        HomeRoutingModule,
    ]
})
export class HomeModule { }
