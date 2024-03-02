import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, ObservableLike, Subject } from 'rxjs';
import { ApiEndpointsService } from 'src/app/core/services/api-endpoints.service';
import { ApiHttpService } from 'src/app/core/services/api-http.service';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  filterSharingSubject: BehaviorSubject<any>;
  currentFilter: Observable<any>
  sideFilter: boolean = true;

  constructor(
    private _apiHttpService: ApiHttpService,
    private _apiEndpointsService: ApiEndpointsService,
  ) { 

    this.filterSharingSubject = new BehaviorSubject<any>('');
    this.currentFilter = this.filterSharingSubject.asObservable();
  }
  public get FilteredValue(): any {
    return this.filterSharingSubject.value;
  }


  getAllApplicationListWithQueryApi(queryParamsObj: Object) {
    return this._apiHttpService
      .get(this._apiEndpointsService.getAllApplicationListWithQueryParamsEndpoint(queryParamsObj));
  }
  
  getApplicationByIdApi(queryParamsObj: Object) {
    return this._apiHttpService
      .get(this._apiEndpointsService.getApplicationByIdQueryParamsEndpoint(queryParamsObj));
  }
  getDownloadCountByAppGuIdApi(queryParamsObj: Object) {
    return this._apiHttpService
      .get(this._apiEndpointsService.getDownloadCountByAppGuIdQueryParamsEndpoint(queryParamsObj));
  }
}
