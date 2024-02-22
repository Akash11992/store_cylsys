import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-home-main',
  templateUrl: './home-main.component.html',
  styleUrls: ['./home-main.component.css']
})
export class HomeMainComponent implements OnInit {
  showSideFilter: boolean = true;
  constructor(
      private _homeService: HomeService,

    ) { }

  ngOnInit(): void {
    this.showSideFilter = this._homeService.sideFilter;
  }

}
