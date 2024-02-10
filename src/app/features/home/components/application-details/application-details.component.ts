import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../services/home.service';
import { SharedService } from 'src/app/shared/services/shared.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-application-details',
  templateUrl: './application-details.component.html',
  styleUrls: ['./application-details.component.css']
})
export class ApplicationDetailsComponent implements OnInit {
  comingAppById: boolean = true;
  ApplicationArr: any = [];
  ApplicationId: any;
  longDescription: string = '';
  constructor(
    private _homeService: HomeService,
    private _sharedService: SharedService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit(): void {
    debugger
    this._route.queryParams.subscribe(params => {
      console.log(params['applicationId']);

      if (params !== undefined) {
        this.ApplicationId = params['applicationId']
      }


    });
    this._fetchDataAndPopulate();


  }
  private _setPaginationConfigNew(): object {
    // let filterQueryParams = this.filterParams;

    let sortQueryParams = {};
    sortQueryParams = {
      id: this.ApplicationId,

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


        console.log(res);

        if (res !== undefined) {
          debugger;
          this.ApplicationArr = res[0];
          let imagePathArray = res[0].imagePath.split(",");
          
          // Assign the array of objects back to imagePath property
          this.ApplicationArr.imagePath = imagePathArray.map((path: any) => ({ path: path.trim() }));;

          // Logging the updated data
          console.log(this.ApplicationArr.imagePath);


          // Create a new DOMParser
          const parser = new DOMParser();

          // Parse the HTML string
          const doc = parser.parseFromString(this.ApplicationArr.longDescription, "text/html");

          // Extract the text content of the span element

          if (doc.body.firstChild !== null) {
            this.longDescription = doc.body.firstChild.textContent || "";
          }
          console.log(this.longDescription); 

        }


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
