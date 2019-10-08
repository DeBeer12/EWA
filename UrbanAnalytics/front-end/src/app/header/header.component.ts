import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NavbarService } from '../services/navbar/navbar.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent{

  navExtended: boolean;

  constructor(
    private navBarService : NavbarService
  ) { 

    this.navBarService.getIsExtended().subscribe(val =>{
      this.navExtended = val;
    });

  }


  toggleNav(){
    this.navBarService.toggleNavBar();
  }
}
