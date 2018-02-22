import { DataService } from './feature/reference/list-reference/service/list-reference.service';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  elementData;
  displayedColumns: string[];

  constructor(private http: HttpClient, private dataService: DataService) {
    this.displayedColumns = ['selectedDivision', 'displayName', 'attributeName', 'isRequired', 'isIncluded'];
    this.dataService.getJSON().subscribe(data => {
        this.elementData = data;
    });
  }

  getAndSaveData($event) {
    this.elementData = [...this.elementData, $event];
  }
}

