import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../services/home.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  lstApplicationArr: any = [];

  constructor(
    private _homeService: HomeService,
    private _route: ActivatedRoute,
    private _router: Router
    ) {}

    ngOnInit(): void {

    this._homeService.getAllApplicationListWithQueryApi().subscribe(
      (res) => {

        console.log(res);

        if (res !== undefined) {

          this.lstApplicationArr = [];
          this.lstApplicationArr = res;
          console.log('lstApplicationArr',this.lstApplicationArr);



        }

      }
    );
  }
}
