import {Component, OnInit} from '@angular/core';
import {DatasetModelComponent} from "../models/dataset.model";
import {DatasetService} from "../services/dataset/dataset.service";
import {MyGroupsService} from "../services/my-groups-for-datasetlist/my-groups.service";
import {MyGroupsModelComponent} from "../models/my-groups.model";

@Component({
  selector: 'app-my-datasets',
  templateUrl: './my-datasets.component.html',
  styleUrls: ['./my-datasets.component.scss']
})

export class MyDatasetsComponent implements OnInit {
  allDatasets = [];
  groupDatasets = [];
  mygroups: MyGroupsModelComponent[];
  allgroups: any;

  constructor(private datasetService: DatasetService, private myGroupsService: MyGroupsService) {
    this.allDatasets = datasetService.getMyItems();
    this.mygroups = myGroupsService.getMyItems();
    this.fillGroupDatasets();
  }


  ngOnInit() {
  }

  public fillGroupDatasets() {
    for (let i = 0; i < this.mygroups.length; i++) {
      for (let j = 0; j < this.allDatasets.length; j++) {
        if (this.allDatasets[j].sort === this.mygroups[i].getSort()) {
          this.groupDatasets.push(this.allDatasets);
        }
      }
    }
    console.log(this.groupDatasets);
  }
}
