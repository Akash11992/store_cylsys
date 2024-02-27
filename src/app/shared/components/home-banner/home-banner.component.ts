import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-banner',
  templateUrl: './home-banner.component.html',
  styleUrls: ['./home-banner.component.css']
})
export class HomeBannerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  visitTmsCS(){
    let url = 'https://tmscs.cylsys.com/'
    window.open(url,'_blank')?.focus();
  }
}
