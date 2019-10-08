import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})

export class MyGroupsModelComponent {
  private sort: number;
  private name: string;

  constructor(
    sort: number,
    name: string
  ) {
    this.sort = sort;
    this.name = name;
  }

  public getSort() {
    return this.sort;
  }
}
