import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class DataService {

    constructor(private http: HttpClient) {}

    public getJSON(): Observable<any> {
      return this.http.get('/assets/data/list.json');
    }
}
