import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-single-group',
  templateUrl: './single-group.component.html',
  styleUrls: ['./single-group.component.scss']
})
export class SingleGroupComponent implements OnInit {
  selectedGroup: {
    groupName: string,
    createdOn: Date,
    createdBy: string,
    memberCount: number,
    imgUrl: string,
    id: number,
    members: {
      firstname: string, lastname: string, email: string
    }[]
    datasets: {
      name: string,
      uploadedOn: Date,
      uploadedBy: string,
      id: number
    }[]
  };

  selectedDataset: {
    name: string,
    uploadedOn: Date,
    uploadedBy: string,
    id: number
  };

  constructor(private userService: UserService) {
    this.selectedGroup = this.userService.getGroupDetails()[1];
    this.selectedDataset = this.selectedGroup.datasets[1];
  }

  ngOnInit() { }
}
