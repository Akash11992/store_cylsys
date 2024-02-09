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
    debugger
    this.sideFilterMenu = [
      { name: "industry" },
      { name: "platform" },
      { name: "price" },
      { name: "apptype" },
    ]

    for (let filter = 0; filter < this.sideFilterMenu.length; filter++) {
      // const element = array[filter];
      this.sortParamKey = this.sideFilterMenu[filter].name
      this.fetchAllfilter();
    }

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

  fetchAllfilter() {
    debugger

      let appQueryParams = this._setPaginationConfigNew();
  
      this._sharedService.getAllApplicationListWithQueryApi(appQueryParams).then(
        (res) => {
  
     
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
