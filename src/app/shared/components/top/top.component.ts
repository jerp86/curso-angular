import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'dio-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss']
})
export class TopComponent {
  @ViewChild('sidenav', { static: false }) sidenav: MatSidenav | undefined

  openSideNav() {
    this.sidenav?.open()
  }

  closeSideNav() {
    this.sidenav?.close()
  }
}
