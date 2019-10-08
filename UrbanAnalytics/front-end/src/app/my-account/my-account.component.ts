import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.scss']
})
export class MyAccountComponent implements OnInit {

  firstName: string;
  lastName: string;
  companyName: string;
  jobDesc: string;
  about: string;
  phoneNum: string;
  email: string;
  website: string;
  loc: string;
  picUrl: string;

  edit: boolean;

  constructor() {
    this.edit = true;

  }

  ngOnInit() {
    this.firstName = "Alex";
    this.lastName = "Ernst";
    this.companyName = "Sweden Analytics";
    this.jobDesc = "Junior Data Analist";
    this.about = "I like to play squash with my mates and beside that I have a big obsession with collection and analysing data about power sources throughout europe Chillwave whatever 90's vexillologist bitters, asymmetrical kale chips enamel pin deserunt lorem pug vape echo park migas.";
    this.phoneNum = "06-12345678";
    this.email = "alex.ernst@sweden.se";
    this.website = "aernst.se";
    this.loc = "Amsterdam, The Netherlands";
    this.picUrl = "http://celebsiren.com/wp-content/uploads/2019/03/ALEx-ernst-300x300.jpg";
  }


}
