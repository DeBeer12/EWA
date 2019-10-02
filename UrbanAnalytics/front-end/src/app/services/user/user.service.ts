import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userDetails: {
    firstname: string,
    lastname: string,
    email: string
  } =
    {
      firstname: "Hans",
      lastname: "Anders",
      email: "HansAnders@gmail.com",
    };

  constructor() { }

  getUserDetails = () => {
    return this.userDetails;
  }
}
