import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../services/home.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  lstApplicationArr: any = [];
  totalRecords: number = 0;
  sortParamKey: string = "";
  totalitems: any;
  itemsPerPage = 10;
  page = 1;
  numberOfPages: number =0;
  activeItem: number = 1;
  pageSize = 10;
  currentPage: any;
  totalcount: any;
  globalPageNumber: number = 0;
  showHide: boolean = false;
  comingAppById : boolean = true;
  filterParams: object = {};
  searchParams: string ='';
isLoading :boolean = true;
  constructor(
    private _homeService: HomeService,
    private _sharedService: SharedService,
    private _route: ActivatedRoute,
    private _router: Router
    ) {}

    ngOnInit(): void {

      // if (this._homeService.filterSharingSubject.value !== "") {
        this._homeService.filterSharingSubject.subscribe(

           (borrower:string) => {
            if (borrower !== undefined && borrower !== null) {
              borrower !==''
                ? (this.searchParams = borrower)
                : (this.searchParams = '');
         
       this._fetchDataAndPopulatePagination(this.globalPageNumber, this.pageSize);
            }
       
          }
        );
      // }

      

        debugger
        this._sharedService.filterSharingSubject.subscribe(

          (borrower) => {
           if (borrower["data"] !== undefined && borrower["data"] !== null) {
             borrower["data"] !==''
               ? (this.filterParams = borrower["data"])
               : (this.filterParams = {});
        
      this._fetchDataAndPopulatePagination(this.globalPageNumber, this.pageSize);
           }
      
         }
       );
  
this.isLoading = true;
      // this._fetchDataAndPopulatePagination(this.globalPageNumber, this.pageSize);

  }

  private _setPaginationConfigNew(): object {
    let filterQueryParams = this.filterParams;

    let sortQueryParams = {};
    sortQueryParams = {
      searchText: this.searchParams,
      sortColumn: this.sortParamKey,
      sortDirection: this.sortParamKey,
    }

    //get pagination
    let paginationQueryParams = {
      start: this.globalPageNumber,
    };

    let pageSizeQueryParams = {
      length: this.pageSize,
    }

    //final query params
    return {

      ...filterQueryParams,
      ...sortQueryParams,
      ...paginationQueryParams,
      ...pageSizeQueryParams
    };
  }

  _fetchDataAndPopulatePagination(pageIndex:any,pageSize:any) {



     if (pageSize != null) {
      this.pageSize = pageSize;
      this.globalPageNumber = pageIndex;
    }
    else {
      this.globalPageNumber = pageIndex;//> 1 ? pageIndex - 1 : 1;
    }


   // this._ngxLoader.start();

    let appQueryParams = this._setPaginationConfigNew();
    this._homeService.getAllApplicationListWithQueryApi(appQueryParams).subscribe(
      (res:any) => {


        console.log(res);

        if (res !== undefined) {

          this.lstApplicationArr = [];
          this.lstApplicationArr = res['aaData'];
          this.totalcount = res['iTotalRecords'];


          this.totalRecords =  res['iTotalRecords'];
          
          this.isLoading = false;


          let pag = Math.ceil(this.totalRecords / this.pageSize);

          this.totalitems = Array(pag)
            .fill(0)
            .map((x, i) => i + 1);

          this.numberOfPages = Math.ceil(
            this.totalRecords / this.pageSize
          );
          console.log('lstApplicationArr',this.lstApplicationArr );
        }

      },
      (err)=>{
        this.isLoading = false;

        if (err.status == 404) {
          this._sharedService.getToastPopup(err.error, 'Application', 'error');
        }else{
          this._sharedService.getToastPopup(err.statusText, 'Application', 'error');

        }
      }
    );
  }


  previousPage() {

    if (this.activeItem > 1)
      this.activeItem--;

      this.globalPageNumber = (this.activeItem* 10 -10);

      this._fetchDataAndPopulatePagination(this.globalPageNumber, this.pageSize);
  }

  nextPage() {

      this.activeItem++;
      this.globalPageNumber = (this.activeItem* 10 -10) ;
      this._fetchDataAndPopulatePagination(this.globalPageNumber, this.pageSize);
  }

  setActiveItem(item: any) {


    this.activeItem = item;

      this.globalPageNumber = (item * 10 -10) ;

    this._fetchDataAndPopulatePagination(this.globalPageNumber, this.pageSize);

  }
  showAll(event:any){
    if(event=="show"){
      this.showHide = true ;
      this.globalPageNumber = 0;
      this.pageSize = this.totalRecords;
      this._fetchDataAndPopulatePagination(this.globalPageNumber, this.pageSize);
    }else{
      this.showHide = false ;
      this.globalPageNumber = 0;
      this.pageSize = 10;
      this._fetchDataAndPopulatePagination(this.globalPageNumber, this.pageSize);
    }
  }
  callAppById(value:any){
    this.comingAppById = false; 
    this._router.navigate(['/application'] , {queryParams: {
      applicationGUID:value.applicationGUID
    }

    });
  }
}
