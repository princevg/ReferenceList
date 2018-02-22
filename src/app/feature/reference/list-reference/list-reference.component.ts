import { FormModel } from './../../../shared/dialog-component/models/form.model';
import { DataService } from './service/list-reference.service';
import { Component, Input, OnChanges, OnInit } from '@angular/core';
import {MatPaginator, MatTableDataSource } from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-list-reference',
  templateUrl: './list-reference.component.html',
  styleUrls: ['./list-reference.component.css']
})

export class ListReferenceComponent implements OnChanges {
  dataService: DataService;
  @Input() elementData;
  displayedColumns: string[];
  constructor(private http: HttpClient) {
    this.displayedColumns = ['selectedDivision', 'displayName', 'attributeName', 'isRequired', 'isIncluded'];
  }

  ngOnChanges () {
    this.elementData = new MatTableDataSource<FormModel>(this.elementData);
  }
}
