import { Injectable } from '@angular/core';
import {MemberListModelComponent} from "../../models/member.model";

@Injectable({
  providedIn: 'root'
})
export class MemberListService {

  constructor() { }
  public members = [
    new MemberListModelComponent('../assets/img/no_profile.png',
      'Hans Weber'),
    new MemberListModelComponent('../assets/img/no_profile.png', 'Darth Vader')
  ];

  public getMyItems() {
    return this.members;
  }
}
