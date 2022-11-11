import { Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output, ViewChild } from '@angular/core';
import { carouselData } from './carouselData.model';

@Component({
  selector: 'gs-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  //------------------- INPUTS ---------------------------
  @Input() carouselData:Array<carouselData> = [];
  @Input() hiddenScrollBar:boolean = false;
  @Input() imageHeight:number = 100;
  @Input() imageWidth:number = 200;
  @Input() imageSmallHeight:number = 80;
  @Input() imageSmallWidth:number = 160;
  @Input() showButtons:boolean = true;
  @Input() lazyLoadImages:boolean = false;
  @Input() imageBorderradius:string = "5px";
  @Input() imageBorder:string = "1px solid #888;";
  @Input() scrollSpeed:number = 10;
  @Input() scrollButtonsColor:string = "";
  //------------------------------------------------------

  //------------------- View Childs ---------------------------
  @ViewChild('gsCarouselInnerContainer') gsCarouselInnerContainer!: ElementRef;
  //-----------------------------------------------------------

  //----------------------- OUTPUTS -------------------------------
  @Output() itemClicked = new EventEmitter<String>();
  //---------------------------------------------------------------

  //---------- GLOBALS -----------------------------------
  mainWidth:number = 0;
  mainHeight:number = 0;
  innerWidth:number = 0;
  lazyLoading:string = "auto";
  scrollSpeedreverse:number = 0;
  //------------------------------------------------------

  constructor() { }

  @HostListener('window:resize', ['$event'])
  onResize(event:any) {
    this.updateImageWH();
  }


  ngOnInit(): void {
    this.updateImageWH();
    this.scrollSpeedreverse = -Math.abs(this.scrollSpeed);
  }

  updateImageWH(){
    this.innerWidth = window.innerWidth;
    if(this.innerWidth > 650){
      this.mainWidth = this.imageWidth;
      this.mainHeight = this.imageHeight;
      this.showButtons = true;
    }
    else{
      this.mainWidth = this.imageSmallWidth;
      this.mainHeight = this.imageSmallHeight;
      this.showButtons = false;
    }
  }

  ngAfterViewInit():void{
  }

  scrollInnerContainer(value:number){
    let toScroll = this.gsCarouselInnerContainer.nativeElement.offsetWidth - 50;
    let timeout = setInterval( () => {
      this.gsCarouselInnerContainer.nativeElement.scrollBy(value,0);
      toScroll -= Math.abs(value);
      if(toScroll <= 0){
        clearInterval(timeout);
      }
    }, 0);
  }

  cardClicked(data:any){
    this.itemClicked.emit(data);
  }
}
