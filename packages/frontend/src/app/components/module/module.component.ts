import { Component, OnInit } from '@angular/core';
import {NavigationService} from '../../services/navigation/navigation.service';

@Component({
  selector: 'app-module',
  templateUrl: './module.component.html',
  styleUrls: ['./module.component.css']
})
export class ModuleComponent {
  constructor(
    private navigationService: NavigationService,
  ) { }

  public navigate(path: any[]) {
    this.navigationService.navigate(path);
  }
}
