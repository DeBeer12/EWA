import {Injectable} from '@angular/core';
import {MyGroupsModelComponent} from "../../models/my-groups.model";
import {DatasetModelComponent} from "../../models/dataset.model";
import {DatasetService} from "../dataset/dataset.service";

@Injectable({
  providedIn: 'root'
})

export class MyGroupsService {
private allDatasets = [];
  // @ts-ignore
  constructor(private datasetModelComponent: DatasetModelComponent, private allDatasets: DatasetService) {
    this.insert(allDatasets);
    this.allDatasets = allDatasets.getMyItems();
  }

  groups = [new MyGroupsModelComponent(2, 'EWA'),
    new MyGroupsModelComponent(0, 'Test'),
  ];

  public getMyItems() {
    return this.groups;
  }

  public insert(datasets: DatasetService) {
    for (let i = 0; i < this.groups.length; i++) {
      // tslint:disable-next-line:prefer-for-of
      for (let j = 0; j < this.allDatasets.length; j++) {
        // tslint:disable-next-line:triple-equals
        if (this.allDatasets[j].sort == this.groups[i].getSort()) {
          this.groups[i].push(datasets.getMyItems(), i);
        }
      }
    }
    console.log(this.groups);
  }

}
