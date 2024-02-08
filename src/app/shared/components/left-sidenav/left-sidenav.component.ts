import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-left-sidenav',
  templateUrl: './left-sidenav.component.html',
  styleUrls: ['./left-sidenav.component.css']
})
export class LeftSidenavComponent implements OnInit {
  sideFilterMenu: any = [];
  industriesArr: any = [];
  platformsArr: any = [];
  priceArr: any = [];
  appTypeArr: any = [];
  sortParamKey: string = '';
  constructor(
    private _sharedService: SharedService,

  ) {
    this.sideFilterMenu = [
      { name: "Industries" },
      { name: "Platforms" },
      { name: "Price" },
      { name: "App_Type" },
    ]
  }

  ngOnInit(): void {

  }

   fetchData(event: any) {
    this.sortParamKey = event;
    this.fetchAllfilter();

  }

  private _setPaginationConfigNew(): object {
    // let filterQueryParams = this.filterParams;

    let sortQueryParams = {};
    sortQueryParams = {
      dropdownType: this.sortParamKey
    }

    //final query params
    return {
      // ...filterQueryParams,
      ...sortQueryParams,
    };
  }

 async fetchAllfilter() {
    let appQueryParams = this._setPaginationConfigNew();

    this._sharedService.getAllApplicationListWithQueryApi(appQueryParams).subscribe(
      (res) => {


        // this.industriesArr = res;
        // console.log(this.industriesArr);

        switch (this.sortParamKey) {
          case 'industry':
            this.industriesArr = res;
            break;
          case 'platform':
            this.platformsArr = res;
            break;
          case 'price':
            this.priceArr = res;
            break;
          case 'apptype':
            this.appTypeArr = res;
            break;
            
        }

      }
    );
  }

}
