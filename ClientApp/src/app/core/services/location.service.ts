import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import { IpInfoModel } from '../models/location.model';

@Injectable()
export class LocationService {
  constructor(private http: HttpClient) {}

  getLocation(): Observable<IpInfoModel> {
    const url = 'https://ipinfo.io/json';

    return this.http.get<IpInfoModel>(url);
  }
}
