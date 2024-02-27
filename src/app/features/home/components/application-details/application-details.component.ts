import { AfterViewInit, Component, OnInit } from '@angular/core';
import { HomeService } from '../../services/home.service';
import { SharedService } from 'src/app/shared/services/shared.service';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';

import * as M from 'materialize-css';
declare var $: any;
declare var require: any;
@Component({
  selector: 'app-application-details',
  templateUrl: './application-details.component.html',
  styleUrls: ['./application-details.component.css']
})
export class ApplicationDetailsComponent implements OnInit, AfterViewInit {
  showSideFilter: boolean = false;
  comingAppById: boolean = true;
  ApplicationArr: any = [];
  ApplicationId: any;
  longDescription: string = '';
  name = 'Angular';
  isLoading: boolean = true;
  apiUrl: any;


  options = { fullWidth: false };
  items = ["https://picsum.photos/200/300?image=0", "https://picsum.photos/200/300?image=1", "https://picsum.photos/200/300?image=2", "https://picsum.photos/200/300?image=3", "https://picsum.photos/200/300?image=4"]

  hrefs = ['one', 'two', 'three', 'four', 'five'];

  constructor(
    private _homeService: HomeService,
    private _sharedService: SharedService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this.apiUrl = environment.apiUrl;
    this._route.queryParams.subscribe(params => {
      // console.log(params['applicationId']);

      if (params !== undefined) {
        this.ApplicationId = params['applicationGUID']
      }


    });
    this._fetchDataAndPopulate();

    this.isLoading = true;




  }

  ngAfterViewInit() {

  }


  private _setPaginationConfigNew(): object {
    // let filterQueryParams = this.filterParams;

    let sortQueryParams = {};
    sortQueryParams = {
      applicationGUID: this.ApplicationId,

    }




    //final query params
    return {

      // ...filterQueryParams,
      ...sortQueryParams,

    };
  }



  _fetchDataAndPopulate() {
    let appQueryParams = this._setPaginationConfigNew();
    this._homeService.getApplicationByIdApi(appQueryParams).subscribe(
      (res: any) => {
        // console.log(res);

        if (res !== undefined) {

          this.ApplicationArr = res[0];
          let imagePathArray = res[0].imagePath.split(",");

          // Assign the array of objects back to imagePath property
          this.ApplicationArr.imagePath = imagePathArray.map((path: any) => ({ path: path.trim() }));;

          // Logging the updated data
          // console.log(this.ApplicationArr.imagePath);

          // Create a new DOMParser
          const parser = new DOMParser();

          // Parse the HTML string
          const doc = parser.parseFromString(this.ApplicationArr.longDescription, "text/html");

          // Extract the text content of the span element

          if (doc.body.firstChild !== null) {
            this.longDescription = doc.body.firstChild.textContent || "";
          }
          // console.log(this.longDescription); 
          this.isLoading = false;

        }
      },
      (err) => {
        this.isLoading = false;

        if (err.status == 404) {
          this._sharedService.getToastPopup(err.error, 'Application', 'error');
        } else {
          this._sharedService.getToastPopup(err.statusText, 'Application', 'error');

        }
      }
    );

  }


  goToAppWeb(event: any) {
    this._fetchAppDetailsForDownloadCount();
    console.log(event);
    let url = event.appURL;
    window.open(url, '_blank')?.focus();

  }




  private _setPaginationConfig(): object {
    let sortQueryParams = {};
    sortQueryParams = {
      applicationGUID: this.ApplicationId,
    }
   //final query params
    return {
      ...sortQueryParams,
    };
  }
  
  
  
  _fetchAppDetailsForDownloadCount() {
    let appQueryParams = this._setPaginationConfig();
    this._homeService.getApplicationByIdApi(appQueryParams).subscribe(
      (res: any) => {
        },
      (err) => {
        if (err.status == 404) {
          this._sharedService.getToastPopup(err.error, 'Application', 'error');
        } else {
          this._sharedService.getToastPopup(err.statusText, 'Application', 'error');
  
        }
      }
    );
  
  }
  
  



}
