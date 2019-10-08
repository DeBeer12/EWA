import {Injectable} from "@angular/core";
import {DatasetService} from "../services/dataset/dataset.service";
import {DatasetModelComponent} from "./dataset.model";

@Injectable({
  providedIn: 'root'
})

export class MyGroupsModelComponent {
  private sort: number;
  private name: string;
  datasets: [DatasetModelComponent];

  constructor(
    sort: number,
    name: string,
  ) {
    this.sort = sort;
    this.name = name;
  }

  public getSort() {
    return this.sort;
  }

  public getName() {
    return this.name;
  }
// nieuwe fuctie voor data input;
  push(myItems: DatasetModelComponent[], i: number) {
    this.datasets.push(myItems[0], myItems[1]);
  }
}
