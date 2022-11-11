import { Component, Input, OnInit } from '@angular/core';
import { CommonService } from 'src/app/Services/CommonService/common.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  footerData:any = {};

  menuData:any = [];

  constructor(private _cs: CommonService) { }

  ngOnInit(): void {
    this.menuData = this._cs.getMenuData();
  }

  OpenRoute(menu:any){
    this._cs.changePage(menu.route,menu.elementId);
  }

}
