import {Component, Injectable, OnInit} from '@angular/core';
import {MemberListService} from "../../../services/memberList/member-list.service";

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-group-members',
  templateUrl: './group-members.component.html',
  styleUrls: ['./group-members.component.scss']
})
export class GroupMembersComponent implements OnInit {
members = [];
  constructor(private memberListService: MemberListService) {
    this.members = this.memberListService.getMyItems();
}


  ngOnInit() {
  }
}
