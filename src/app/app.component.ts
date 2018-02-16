import { Component } from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

export interface Element {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  elementData;
  displayedColumns: string[];
  constructor(private http: HttpClient) {
    this.getJSON().subscribe(data => {
        this.displayedColumns = ['selectedDivision', 'displayName', 'attributeName', 'isRequired', 'isIncluded'];
        this.elementData = new MatTableDataSource<Element>(data);
        console.log(this.elementData);
    });
  }

  public getJSON(): Observable<any> {
      return this.http.get('../assets/data/list.json');
  }

  getAndSaveData($event) {
    this.elementData.data = [...this.elementData.data, $event];
  }
}

