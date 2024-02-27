import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-footer',
  templateUrl: './home-footer.component.html',
  styleUrls: ['./home-footer.component.css']
})
export class HomeFooterComponent implements OnInit {
year:any;
  constructor() { }

  ngOnInit(): void {
    this.year = new Date().getFullYear()
  }
webHome(){
  let url = 'https://cylsys.com/'
  window.open(url,'_blank')?.focus();
}
}
