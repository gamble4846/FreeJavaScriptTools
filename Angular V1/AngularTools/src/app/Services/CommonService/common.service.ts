import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CommonService {


  menuData:any = [
    {name:"Home", route:"/Home", elementId:"Home"},
    {name:"About Us", route:"/Home", elementId:"AboutUs"},
    {name:"Products", route:"/Home", elementId:"Products"},
    {name:"Services", route:"/Home", elementId:"Services"},
    {name:"Quote Now", route:"/Home", elementId:"QuoteNow"},
  ];

  constructor(private router:Router) { }

  getMenuData(){
    return this.menuData;
  }

  changePage(route:string, elementId:string){
    this.router.navigate([route]);

    setTimeout(() => {
      let element:any = document.getElementById(elementId);
      element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    }, 100);
  }

  changePageOnlyRoute(route:string){
    this.router.navigate([route]);
  }

  ShowContactUsModal(){
    document.getElementById("ShowContactUsModalBTN")?.click();
  }

  ShowLoader(){
    document.getElementById("loaderContainer")?.classList.add("show");
  }

  HideLoader(){
    document.getElementById("loaderContainer")?.classList.remove("show");
  }
}
