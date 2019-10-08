import { Injectable } from '@angular/core';
import {MyGroupsModelComponent} from "../../models/my-groups.model";

@Injectable({
  providedIn: 'root'
})

export class MyGroupsService {

  constructor() { }
   groups = [new MyGroupsModelComponent(2, 'EWA'),
   new MyGroupsModelComponent(0, 'Test')
   ];

  public getMyItems() {
   return this.groups;
 }
}
