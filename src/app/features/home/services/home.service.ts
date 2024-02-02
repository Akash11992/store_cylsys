import { Injectable } from '@angular/core';
import { ApiEndpointsService } from 'src/app/core/services/api-endpoints.service';
import { ApiHttpService } from 'src/app/core/services/api-http.service';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(
    private _apiHttpService: ApiHttpService,
    private _apiEndpointsService: ApiEndpointsService,
  ) { }

  getAllApplicationListWithQueryApi(queryParamsObj: Object) {
    return this._apiHttpService
      .get(this._apiEndpointsService.getAllApplicationListWithQueryParamsEndpoint(queryParamsObj));
  }
}
