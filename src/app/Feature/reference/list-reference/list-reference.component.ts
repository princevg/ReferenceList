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

  @Input() elementData;
  displayedColumns: string[];
  constructor(private http: HttpClient) {
    this.displayedColumns = ['selectedDivision', 'displayName', 'attributeName', 'isRequired', 'isIncluded'];
  }

  ngOnChanges () {
    this.elementData = new MatTableDataSource<Element>(this.elementData);
  }

  public getJSON(): Observable<any> {
      return this.http.get('/assets/data/list.json');
  }
}
