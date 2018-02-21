import { Component } from '@angular/core';
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
    this.displayedColumns = ['selectedDivision', 'displayName', 'attributeName', 'isRequired', 'isIncluded'];
    this.getJSON().subscribe(data => {
        this.elementData = data;
    });
  }

  public getJSON(): Observable<any> {
      return this.http.get('/assets/data/list.json');
  }

  getAndSaveData($event) {
    this.elementData = [...this.elementData, $event];
  }
}

