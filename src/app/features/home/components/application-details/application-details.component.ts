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
  comingAppById : boolean = true;
  ApplicationArr:any = [];
  ApplicationId : any;

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
      
      if(params !== undefined){
       this.ApplicationId = params['applicationId']
      }
    

    });
this.  _fetchDataAndPopulate();


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
      (res:any) => {


        console.log(res);

        if (res !== undefined) {

          this.ApplicationArr = [];
          this.ApplicationArr = res[0];
        }

      },
      (err)=>{
        if (err.status == 404) {
          this._sharedService.getToastPopup(err.error, 'Application', 'error');
        }else{
          this._sharedService.getToastPopup(err.statusText, 'Application', 'error');

        }
      }
    );

    }










  
//   function splitImagePath(obj) {
//     // Split the imagePath value by comma
//     let imagePathArray = obj.imagePath.split(",");
//     // Push the separated paths into a new array
//     obj.imagePath = imagePathArray;
// }

// // Call the function for each object in the data array
// data.forEach(splitImagePath);

// // Logging the updated data
// console.log(data);
}
