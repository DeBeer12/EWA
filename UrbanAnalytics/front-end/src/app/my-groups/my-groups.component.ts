import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user/user.service';

@Component({
  selector: 'app-my-groups',
  templateUrl: './my-groups.component.html',
  styleUrls: ['./my-groups.component.scss']
})
export class MyGroupsComponent implements OnInit {
  selectedGroup: {} = this.userService.getGroupDetails()[1];

  constructor(private userService: UserService) { }

  ngOnInit() {
  }
}
