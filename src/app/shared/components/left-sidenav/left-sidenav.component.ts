import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-left-sidenav',
  templateUrl: './left-sidenav.component.html',
  styleUrls: ['./left-sidenav.component.css']
})
export class LeftSidenavComponent implements OnInit {

  constructor(
    private _sharedService: SharedService,

  ) { }

  ngOnInit(): void {

    this._sharedService.getAllApplicationListWithQueryApi().subscribe(
      (res) => {
        console.log(res);

      }
    );
  }


}
