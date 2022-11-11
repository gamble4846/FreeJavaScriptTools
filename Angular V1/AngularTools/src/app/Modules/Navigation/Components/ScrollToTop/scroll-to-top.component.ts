import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-scroll-to-top',
  templateUrl: './scroll-to-top.component.html',
  styleUrls: ['./scroll-to-top.component.css']
})
export class ScrollToTopComponent implements OnInit {

  @ViewChild('toTopButton') toTopButton!:ElementRef;

  constructor() { }

  ngOnInit(): void {
    this.setUpScroller();
  }

  routerScrolled(){
    this.setUpScroller();
  }

  setUpScroller(){
    let routerContainer:any = document.getElementById("routerContainer");
    try{
      if (routerContainer.scrollTop > 30) {
        this.toTopButton.nativeElement.style.opacity = "1";
        this.toTopButton.nativeElement.style.pointerEvents = "auto";
      } else {
        this.toTopButton.nativeElement.style.opacity = "0";
        this.toTopButton.nativeElement.style.pointerEvents = "none";
      }
    }
    catch(ex){}
  }

  ScrollToTopClicked(){
    let routerContainer:any = document.getElementById("routerContainer");
    routerContainer.scrollBy({
      top: -Math.abs(routerContainer.scrollTop),
      left: 0,
      behavior: 'smooth'
    });
  }

}
