import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  // TODO: Make model for userData
  userDetails: { firstname: string, lastname: string, email: string } =
    {
      firstname: "Hans",
      lastname: "Anders",
      email: "HansAnders@gmail.com",
    };

  // TODO: Make model for groupData
  groupDetails: { groupName: string, createdOn: Date, createdBy: string, memberCount: number, imgUrl: string, id: number, members: [] }[]
    = [
      {
        groupName: "Ewa Project",
        createdOn: new Date(),
        createdBy: "Hans Anders",
        memberCount: 11,
        imgUrl: "",
        id: 0,
        members: []
      }, {
        groupName: "EU Energy",
        createdOn: new Date(),
        createdBy: "Jerry Geerts",
        memberCount: 61,
        imgUrl: "",
        id: 1,
        members: [

        ]
      },
    ];
  constructor() { }

  getUserDetails = () => {
    return this.userDetails;
  }

  getGroupDetails = () => {
    return this.groupDetails;
  }
}
