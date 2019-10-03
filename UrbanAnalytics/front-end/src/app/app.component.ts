import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'UrbanAnalytics';
  navExtended : boolean = false;

  changeNav = (event) => {
   this.navExtended = event;
  }
}


