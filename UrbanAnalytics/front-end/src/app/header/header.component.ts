import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NavbarService } from '../services/navbar/navbar.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss', './hamburger.scss', './notifications.scss']
})
export class HeaderComponent {

  navExtended: boolean;
  clicks: number = 0;

  constructor(
    private navBarService: NavbarService
  ) {

    this.navBarService.getIsExtended().subscribe(val => {
      this.navExtended = val;
    });

  }

  paasMeDeDisco() {
    console.log("fayja");
  }

  toggleNav() {
    this.navBarService.toggleNavBar();
  }
}
