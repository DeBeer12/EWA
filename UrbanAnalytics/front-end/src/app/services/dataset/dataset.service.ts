import {Injectable} from '@angular/core';
import {DatasetModelComponent} from "../../models/dataset.model";

@Injectable({
  providedIn: 'root'
})
export class DatasetService {
  constructor() {
  }

  public datasets = [
    new DatasetModelComponent('Zonnepanelen Nuon NL', 'Alle energie die opgewekt wordt door zonnepanelen van Nuon in NL', 1),
    new DatasetModelComponent('Zonnepanelen Nuon EU', 'Alle energie die opgewekt wordt door zonnepanelen van Nuon in de EU', 0),
    new DatasetModelComponent('Zonnepanelen Nuon Region', 'Alle energie die opgewekt wordt door zonnepanelen van Nuon in Noord-Holland', 2),
    new DatasetModelComponent('Zonnepanelen Nuon EU', 'Alle energie die opgewekt wordt door zonnepanelen van Nuon in de EU', 0),
    new DatasetModelComponent('Verbruik van laptops', 'Verbuik van laptops tijdens Ewa', 3),
    new DatasetModelComponent('Test', 'Test', 4)
  ];

  public getMyItems() {
    return this.datasets;
  }
  public getSort(index: number) {
    this.datasets[index].getSort();
  }
}
