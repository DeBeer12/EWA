import { Injectable } from '@angular/core';
import {DatasetModelComponent} from "../../models/dataset.model";

@Injectable({
  providedIn: 'root'
})
export class DatasetService {

  constructor() { }
  public datasets = [
    new DatasetModelComponent('Zonnepanelen Nuon NL', 'Alle eneregie die opgewekt door zonnepanelen van Nuon in NL', 1),
    new DatasetModelComponent('Zonnepanelen Nuon Region', 'Alle eneregie die opgewekt door zonnepanelen van Nuon in Noord-Holland', 2),
    new DatasetModelComponent('Zonnepanelen Nuon EU', 'Alle eneregie die opgewekt door zonnepanelen van Nuon in de EU', 0)
  ];
  public getMyItems() {
    return this.datasets;
  }
}
