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
  groupDetails: {
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
  }[]
    = [
      {
        groupName: "Ewa Project",
        createdOn: new Date(),
        createdBy: "Hans Anders",
        memberCount: 11,
        imgUrl: "",
        id: 0,
        members: [],
        datasets: [

        ]
      }, {
        groupName: "EU Energy",
        createdOn: new Date(),
        createdBy: "Jerry Geerts",
        memberCount: 61,
        imgUrl: "",
        id: 1,
        // Gets filled with userData models
        members: [
          {
            firstname: "Hans",
            lastname: "Anders",
            email: "HansAnders@gmail.com",
          }
        ],
        // Make datasets a model
        datasets: [
          {
            name: "Cool dataset",
            uploadedOn: new Date(),
            uploadedBy: "Jerry",
            id: 0
          }, {
            name: "Hot dataset",
            uploadedOn: new Date(),
            uploadedBy: "Danny",
            id: 1
          }
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
