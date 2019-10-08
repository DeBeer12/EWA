import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { NavbarService } from '../services/navbar/navbar.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent{

  navExtended: boolean = true;
  pageChangeObserver = null;
  currentParentUrl: string;

  //All the links in the navbar
  navBarRoutes = [
    {"text": "Home", "link" : "/dashboard", "iconClasses": "fa fa-3x fa-home medium"},
    {"text": "Datasets", "link" : "/datasets", "iconClasses": "fa fa-3x fa-bar-chart small"},
    {"text": "Groups", "link" : "/groups", "iconClasses": "fa fa-3x fa-users small"},
  ]

  //Constructor
  constructor(
    private router: Router,
    private navBarService : NavbarService 
    ) { 
    //Subscribing to 'route change' event
    this.pageChangeObserver = router.events.subscribe((val) => {
        if(val instanceof NavigationEnd){
          //When the route changed close the navbar
          this.navBarService.closeNavBar();
          this.setParentUrl(val);
        } 
    });
  
    //Subscribing to navBar service to see if it's state changes
    this.navBarService.getIsExtended().subscribe(val => {
      //if navbar state is changed set local variable to the one of the service
      this.navExtended = val;
    });
  }

  //Extracts the parent route from a url
  setParentUrl(navEnd : NavigationEnd){
    //TODO Get parent url if url is nested with children
    let newUrl = navEnd.url;
    this.currentParentUrl = newUrl;
    console.log(newUrl);
    
  }

  //Destroys when component unloads from 'page'
  ngOnDestroy(){
    //unsubscribing from pageChangeObserver,
    //if not unsubscribing an extra observer will add every route change firering x times for every route page
    this.pageChangeObserver.unsubscribe();
  }
}
