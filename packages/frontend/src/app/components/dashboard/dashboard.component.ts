import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  constructor(
    private route: ActivatedRoute,
  ) {}

  public get title() {
    return this.route.firstChild.routeConfig.data.title;
  }
}
