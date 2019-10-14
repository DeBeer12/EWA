
import { Component, OnInit } from '@angular/core';
import { DatasetModelComponent } from "../models/dataset.model";
import { DatasetService } from "../services/dataset/dataset.service";
import { MyGroupsService } from "../services/my-groups-for-datasetlist/my-groups.service";
import { MyGroupsModelComponent } from "../models/my-groups.model";
import { UserService } from "../services/user/user.service";



@Component({
  selector: 'app-my-datasets',
  templateUrl: './my-datasets.component.html',
  styleUrls: ['./my-datasets.component.scss']
})

export class MyDatasetsComponent implements OnInit {
  private allDatasets = [];
  private sortNumber: number;
  groupDatasets = [[], this.sortNumber];
  mygroups: MyGroupsModelComponent[];
  allgroups: any;

  constructor(private datasetService: DatasetService, private myGroupsService: MyGroupsService) {
    this.allDatasets = datasetService.getMyItems();
    console.log(this.allDatasets);
    this.mygroups = myGroupsService.getMyItems();
    this.fillGroupDatasets();
  }


  ngOnInit() {
  }

  public fillGroupDatasets() {
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.mygroups.length; i++) {
      // tslint:disable-next-line:prefer-for-of
      for (let j = 0; j < this.allDatasets.length; j++) {
        if (this.allDatasets[j].sort === this.mygroups[i].getSort()) {
          const name = this.mygroups[i].getName();
          this.groupDatasets.push(this.allDatasets[j], this.mygroups[i].getSort());
        }
      }
    }
    console.log(this.groupDatasets);
  }


}
