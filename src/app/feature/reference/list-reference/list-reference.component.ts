import { FormModel } from './../../../shared/dialog-component/models/form.model';
import { DataService } from './service/list-reference.service';
import { Component, Input, OnChanges } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-list-reference',
  templateUrl: './list-reference.component.html',
  styleUrls: ['./list-reference.component.css']
})

export class ListReferenceComponent implements OnChanges {
  dataService: DataService;
  @Input() elementData;
  displayedColumns: string[];
  constructor() {
    this.displayedColumns = ['selectedDivision', 'displayName', 'attributeName', 'isRequired', 'isIncluded'];
  }

  ngOnChanges () {
    this.elementData = new MatTableDataSource<FormModel>(this.elementData);
  }
}
