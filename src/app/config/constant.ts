import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable()
export class Constants {

  public readonly API_ENDPOINT: string = environment.apiUrl;
  public readonly API_MOCK_ENDPOINT: string = environment.apiMockUrl;
  public readonly API_IS_DEVELOPMENT_ENV: boolean = environment.production;

  // Application
  public readonly API_ENDPOINT_ALL_APPLICATION: string = 'allApplications'
  public readonly API_ENDPOINT_ALL_FILTER_DROPDOWN: string = 'allApplications/GetDropdownList'


}
