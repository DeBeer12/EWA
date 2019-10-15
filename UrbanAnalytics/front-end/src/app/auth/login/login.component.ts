import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  public signThis():void{
    this.router.navigate(['auth/register']);
    console.log("de button werkt ");
    
  }

  public logIn():void{
    this.router.navigate(['account']);
    console.log("de button werkt2 ");
    
  }
}