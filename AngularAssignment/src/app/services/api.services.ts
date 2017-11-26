import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { AppSettings } from "../const";

@Injectable()
export class APIService {
    public headers = new Headers();
    constructor(private http: Http){this.headers.append('Content-Type', 'application/json');}

  Post(URL: string, input: any): Observable<any> {
    return this.http.post(AppSettings.rootUrl + URL, input, {
      headers: this.headers
    }).map(response => response.json())
  }

    Get(URL: string): Observable<any> {
    return this.http.get(AppSettings.rootUrl + URL, {
      headers: this.headers
    }).map(response => response.json())
  }

  Put(URL:String, input:any): Observable<any> {
    return this.http.put(AppSettings.rootUrl + URL, input, {
      headers: this.headers
    }).map(response => response.json())
  }

    Delete(URL:String, input:any): Observable<any> {
    return this.http.delete(AppSettings.rootUrl + URL, {
      headers: this.headers
    }).map(response => response.json())
  }
}