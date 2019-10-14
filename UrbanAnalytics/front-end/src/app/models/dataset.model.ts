import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})

export class DatasetModelComponent {
  private name: string;
  private summary: string;
  private sort: number;

  constructor(
    name: string,
    summary: string,
    sort: number
  ) {
    this.name = name;
    this.summary = summary;
    this.sort = sort;
  }
  public getSort() {
    return this.sort;
  }
}
