import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from 'src/app/features/home/services/home.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private _router:Router,
    private _homeService:HomeService
  ) { }

  ngOnInit(): void {
  
  }
  async filterItem(value:any) {
    if (!value) {
      let nextData:any = '';
      this._homeService.filterSharingSubject.next(nextData);
    }
    
    if (value.length >= 3) {
      let nextData:any = '';
    nextData = value;
    this._homeService.filterSharingSubject.next(nextData);
    // this._router.navigate(['/dashboard'])
      //  window.location.reload();
    }

  }

  
}
