import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Data } from './data';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private baseURL = 'http://localhost:8081/index'
  private nameSource = new BehaviorSubject<string>('');
  start = this.nameSource.asObservable()
  constructor(private httpClient: HttpClient) { }

  changeStart(start: string) {
    this.nameSource.next(start);
  }

  getTimeList(): Observable<Date[]>{
    return this.httpClient.get<Date[]>(`${this.baseURL}`)
  }

  addData(data: Data): Observable<any> {
    return this.httpClient.post<any>(this.baseURL, data);
  }

}
