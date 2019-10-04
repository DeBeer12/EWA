import { Component } from '@angular/core';
import { UserService } from './services/user/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [UserService]
})
export class AppComponent {
  title = 'UrbanAnalytics';
  navExtended: boolean = false;

  constructor(private userService: UserService) { }

  changeNav = (event) => {
    this.navExtended = event;
  }
}


