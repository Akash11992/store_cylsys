import { Injectable } from '@angular/core';
import { Constants } from 'src/app/config/constant';
import { UrlBuilder } from '../../shared/classes/url-builder';
import { QueryStringParameters } from '../../shared/classes/query-string-parameters';

@Injectable({
  providedIn: 'root'
})
export class ApiEndpointsService {
  constructor(
    private _constants: Constants
  ) { }

  private createUrl(
    action: string,
    isMockAPI: boolean = false
  ): string {
    const urlBuilder: UrlBuilder = new UrlBuilder(
      isMockAPI ? this._constants.API_MOCK_ENDPOINT :
        this._constants.API_ENDPOINT,
      action
    );
    return urlBuilder.toString();
  }

    // URL WITH QUERY PARAMS
    private createUrlWithQueryParameters(
      action: string,
      queryStringHandler?:
        (queryStringParameters: QueryStringParameters) => void
    ): string {
      const urlBuilder: UrlBuilder = new UrlBuilder(
        this._constants.API_ENDPOINT,
        action
      );
      // Push extra query string params
      if (queryStringHandler) {
        queryStringHandler(urlBuilder.queryString);
      }
      return urlBuilder.toString();
    }

    // URL WITH QUERY PARAMS
    private createUrlWithQueryParametersExclude(
      action: string,
      queryStringHandler?:
        (queryStringParameters: QueryStringParameters) => void
    ): string {
      const urlBuilder: UrlBuilder = new UrlBuilder(
        this._constants.API_ENDPOINT,
        action
      );
      // Push extra query string params
      if (queryStringHandler) {
        queryStringHandler(urlBuilder.queryString);
      }
      return urlBuilder.toString();
    }

    // URL WITH PATH VARIABLES
    private createUrlWithPathVariables(
      action: string,
      pathVariables: any[] = []
    ): string {
      let encodedPathVariablesUrl: string = '';
      // Push extra path variables
      for (const pathVariable of pathVariables) {
        if (pathVariable !== null) {
          encodedPathVariablesUrl +=
            `${encodeURIComponent(pathVariable.toString())}/`;
        }
      }
      const urlBuilder: UrlBuilder = new UrlBuilder(
        this._constants.API_ENDPOINT,
        `${action}${encodedPathVariablesUrl}`
      );
      return urlBuilder.toString();
    }


  public getAllApplicationListWithQueryParamsEndpoint(): string {
    return this.createUrl(this._constants.API_ENDPOINT_ALL_APPLICATION);
  }
}
