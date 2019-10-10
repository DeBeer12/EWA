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
            name: "Electricity prices by type of user",
            uploadedOn: new Date(),
            uploadedBy: "Jerry",
            id: 0
          }, {
            name: "Primary energy consumption",
            uploadedOn: new Date(),
            uploadedBy: "Danny",
            id: 1
          }, {
            name: "Final energy consumption ",
            uploadedOn: new Date(),
            uploadedBy: "Evan",
            id: 2
          }, {
            name: "Energy productivity",
            uploadedOn: new Date(),
            uploadedBy: "Richard",
            id: 3
          }, {
            name: "Energy import dependency by products",
            uploadedOn: new Date(),
            uploadedBy: "Niels",
            id: 4
          }, {
            name: "Final energy consumption in households per capita",
            uploadedOn: new Date(),
            uploadedBy: "Jerry",
            id: 5
          }, {
            name: "Super crazy dataset",
            uploadedOn: new Date(),
            uploadedBy: "Arfeen",
            id: 6
          }
        ]
      },
    ];

  Allmembers: {
    firstname: string, lastname: string, email: string
  }[] = [
      {
        firstname: "Hans",
        lastname: "Anders",
        email: "HansAnders@gmail.com",
      },
      {
        firstname: "Niels",
        lastname: "van Oeffel",
        email: "niels@gmail.com",
      },
      {
        firstname: "Jerry",
        lastname: "Geerts",
        email: "jerry@gmail.com",
      },
      {
        firstname: "Danny",
        lastname: "Huigen",
        email: "danny@gmail.com",
      },
      {
        firstname: "Bob",
        lastname: "Broersen",
        email: "bob@gmail.com",
      }, {
        firstname: "Hans",
        lastname: "Anders",
        email: "HansAnders@gmail.com",
      },
      {
        firstname: "Niels",
        lastname: "van Oeffel",
        email: "niels@gmail.com",
      },
      {
        firstname: "Jerry",
        lastname: "Geerts",
        email: "jerry@gmail.com",
      },
      {
        firstname: "Danny",
        lastname: "Huigen",
        email: "danny@gmail.com",
      },
      {
        firstname: "Bob",
        lastname: "Broersen",
        email: "bob@gmail.com",
      }
    ];
  constructor() { }

  getUserDetails = () => {
    return this.userDetails;
  };

  getGroupDetails = () => {
    return this.groupDetails;
  }
}
