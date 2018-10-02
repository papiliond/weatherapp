import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import { DailyForecast } from '../models/daily-forecast.model';

const API_KEY = "15646a06818f61f7b8d7823ca833e1ce";

@Injectable()
export class ForecastService {
  constructor(private http: HttpClient) {}

  getDailyForecast(city: string): Observable<DailyForecast> {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${API_KEY}`;

    return this.http.get<DailyForecast>(url);
  }

  getWeeklyForecast(city: string): Observable<WeeklyForecast> {
    const url = `https://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&mode=xml&units=metric&cnt=7&APPID=${API_KEY}`;

    return this.http.get<WeeklyForecast>(url);
  }
}
