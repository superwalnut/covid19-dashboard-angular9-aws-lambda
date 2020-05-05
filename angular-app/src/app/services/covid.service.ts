import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CovidService {
  constructor(private httpClient: HttpClient) {}

  private get(url: string): Observable<any> {
    return this.httpClient.get(`${environment.baseUrl}/${url}`, {
      headers: {
        'Content-Type': 'application/json',
      } });
  }

  loadOverall(): Observable<any> {    
    var result = this.get('timeline-overall.json');
    return result as Observable<any>;
  }

  loadLatest(): Observable<any> {    
    var result = this.get('timeline-latest.json');
    return result as Observable<any>;
  }
}
