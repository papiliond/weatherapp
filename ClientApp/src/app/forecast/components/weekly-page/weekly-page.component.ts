import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-weekly-page',
  templateUrl: './weekly-page.component.html',
  styles: []
})
export class WeeklyPageComponent implements OnInit {

  @Input()
  weeklyForecast?: WeeklyForecast;

  constructor() { }

  ngOnInit() {
  }

}
