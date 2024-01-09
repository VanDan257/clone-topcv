import { Component } from '@angular/core';

declare const $: any;
@Component({
  selector: 'app-trangchu',
  templateUrl: './trangchu.component.html',
  styleUrls: ['./trangchu.component.css']
})

export class TrangchuComponent {

  hideShow() {
    $("#header__search-sub").style.display = 'none';
  }
}
