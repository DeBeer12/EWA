import { Component, OnInit } from '@angular/core';
import {DatasetModelComponent} from "../models/dataset.model";
import {DatasetService} from "../services/dataset/dataset.service";

@Component({
  selector: 'app-my-datasets',
  templateUrl: './my-datasets.component.html',
  styleUrls: ['./my-datasets.component.scss']
})
export class MyDatasetsComponent implements OnInit {
datasets = [];
  groups: any;

  constructor(private datasetService: DatasetService) {
    this.datasets = datasetService.getMyItems();
  }

  ngOnInit() {
  }

}
