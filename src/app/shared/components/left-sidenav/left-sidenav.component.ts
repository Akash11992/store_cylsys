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
  selectedFilterArr: any = [];
  constructor(
    private _sharedService: SharedService,

  ) {
    this.sideFilterMenu = [
      { name: "industry" },
      { name: "platform" },
      { name: "price" },
      { name: "apptype" },
    ]
    this.fetchAllfilter()

  }

  ngOnInit(): void {


  }

  fetchAllfilter() {

    for (let filter = 0; filter < this.sideFilterMenu.length; filter++) {

      this.sortParamKey = this.sideFilterMenu[filter].name
      let appQueryParams = this._setPaginationConfigNew();

      switch (this.sortParamKey) {
        case 'industry':
          this._sharedService.getAllApplicationListWithQueryApi(appQueryParams).then(
            (res) => {
              this.industriesArr = res;
            }
          );
          break;
        case 'platform':
          this._sharedService.getAllApplicationListWithQueryApi(appQueryParams).then(
            (res) => {
              this.platformsArr = res;
            }
          );
          break;
        case 'price':
          this._sharedService.getAllApplicationListWithQueryApi(appQueryParams).then(
            (res) => {
              this.priceArr = res;
            }
          );
          break;
        case 'apptype':
          this._sharedService.getAllApplicationListWithQueryApi(appQueryParams).then(
            (res) => {
              this.appTypeArr = res;
            }
          );
          break;

      }
    }
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

  onSelectFilter(selectedFilterObj: any, category: any = undefined , event:any) {

    selectedFilterObj["selected"] = event.target.checked
    switch (category) {
      case "industry":
        this.selectedFilterArr.push({
          filterCatType: category,
          filterCatName: 'industries',
          filterSubCatName: selectedFilterObj["text"],
          filterSubCatId: selectedFilterObj["value"],
        });
        if (!selectedFilterObj["selected"]) {
          this.selectedFilterArr = this.selectedFilterArr.filter(function (el: any) {
            return (
              el.filterCatType != category ||
              el.filterSubCatId != selectedFilterObj["value"]
            )
          })
        }
        break;
        case "platform":
          this.selectedFilterArr.push({
            filterCatType: category,
            filterCatName: 'Platforms',
            filterSubCatName: selectedFilterObj["text"],
            filterSubCatId: selectedFilterObj["value"],
          });
          if (!selectedFilterObj["selected"]) {
            this.selectedFilterArr = this.selectedFilterArr.filter(function (el: any) {
              return (
                el.filterCatType != category ||
                el.filterSubCatId != selectedFilterObj["value"]
              )
            })
          }
          break;
          case "price":
            this.selectedFilterArr.push({
              filterCatType: category,
              filterCatName: 'prices',
              filterSubCatName: selectedFilterObj["text"],
              filterSubCatId: selectedFilterObj["value"],
            });
            if (!selectedFilterObj["selected"]) {
              this.selectedFilterArr = this.selectedFilterArr.filter(function (el: any) {
                return (
                  el.filterCatType != category ||
                  el.filterSubCatId != selectedFilterObj["value"]
                )
              })
            }
            break;
            case "apptype":
              this.selectedFilterArr.push({
                filterCatType: category,
                filterCatName: 'apptype',
                filterSubCatName: selectedFilterObj["text"],
                filterSubCatId: selectedFilterObj["value"],
              });
              if (!selectedFilterObj["selected"]) {
                this.selectedFilterArr = this.selectedFilterArr.filter(function (el: any) {
                  return (
                    el.filterCatType != category ||
                    el.filterSubCatId != selectedFilterObj["value"]
                  )
                })
              }
              break;
    }
this. applyFilter();
  }

  applyFilter() {
    let paramsObj: any = {};
    this.selectedFilterArr.map((selectedFilter: any) => {
      switch (selectedFilter["filterCatType"]) {
        case "industry":
          if (paramsObj["industryDropdown"]) {
            paramsObj["industryDropdown"] = paramsObj["industryDropdown"] + "|" + selectedFilter["filterSubCatId"];
          } else {
            let industryParams = {
              industryDropdown: selectedFilter["filterSubCatId"],
            };
            paramsObj = { ...paramsObj, ...industryParams }
          }
          break;
          case "platform":
            if (paramsObj["platformDropdown"]) {
              paramsObj["platformDropdown"] = paramsObj["platformDropdown"] + "|" + selectedFilter["filterSubCatId"];
            } else {
              let platformParams = {
                platformDropdown: selectedFilter["filterSubCatId"],
              };
              paramsObj = { ...paramsObj, ...platformParams }
            }
            break;
            case "price":
              if (paramsObj["priceDropdown"]) {
                paramsObj["priceDropdown"] = paramsObj["priceDropdown"] + "|" + selectedFilter["filterSubCatId"];
              } else {
                let priceParams = {
                  priceDropdown: selectedFilter["filterSubCatId"],
                };
                paramsObj = { ...paramsObj, ...priceParams }
              }
              break;
              case "apptype":
                if (paramsObj["appTypeDropdown"]) {
                  paramsObj["appTypeDropdown"] = paramsObj["appTypeDropdown"] + "|" + selectedFilter["filterSubCatId"];
                } else {
                  let apptypeParams = {
                    appTypeDropdown: selectedFilter["filterSubCatId"],
                  };
                  paramsObj = { ...paramsObj, ...apptypeParams }
                }
                break;
      }
    });
    let nextData:any = {};
    nextData["data"] = paramsObj;
    // console.log(nextData["data"]);
    this._sharedService.filterSharingSubject.next(nextData)
  }


}
