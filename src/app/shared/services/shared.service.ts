import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ApiEndpointsService } from 'src/app/core/services/api-endpoints.service';
import { ApiHttpService } from 'src/app/core/services/api-http.service';

@Injectable({
  providedIn: 'root'
})
export class SharedService {


  constructor(
    private _toastr: ToastrService,
    private _apiHttpService: ApiHttpService,
    private _apiEndpointsService: ApiEndpointsService,
    ) {
      sessionStorage.setItem("isAuthenticated", "true");
     }


  getAllApplicationListWithQueryApi(queryParamsObj: Object) {
    return this._apiHttpService
      .get(this._apiEndpointsService.getFilterByTagListWithQueryParamsEndpoint(queryParamsObj));
  }

  isLoggedIn() {
    return  sessionStorage.getItem('isAuthenticated');
  }

  getToastPopup(errorMsg: string, errorModule: string, errorType: string) {
    switch (errorType) {
      case 'error':
        this._toastr.error(errorMsg, errorModule, {
          progressBar: true
        });
        break;
      case 'info':
        this._toastr.info(errorMsg, errorModule, {
          progressBar: true
        });
        break;
      case 'success':
        this._toastr.success(errorMsg, errorModule, {
          progressBar: true
        });
        break;
    }
  }
}
