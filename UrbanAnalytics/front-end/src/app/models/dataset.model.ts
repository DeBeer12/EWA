import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})

export class DatasetModelComponent {
  public name: string;
  public summary: string;
  public sort: number;

  constructor(
    name: string,
    summary: string,
    sort: number
  ) {
    this.name = name;
    this.summary = summary;
    this.sort = sort;
  }

}
