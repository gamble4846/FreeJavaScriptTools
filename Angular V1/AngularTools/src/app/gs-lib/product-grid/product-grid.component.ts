import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { productGridData } from './productGridData.model';

@Component({
  selector: 'gs-product-grid',
  templateUrl: './product-grid.component.html',
  styleUrls: ['./product-grid.component.css']
})
export class ProductGridComponent implements OnInit {

  constructor() { }

  //------------------- INPUTS ---------------------------
  @Input() imageHeight:number = 300;
  @Input() imageWidth:number = 200;
  @Input() imageSmallHeight:number = 200;
  @Input() imageSmallWidth:number = 150;
  @Input() borderRadius:string = "15px";
  @Input() productGridData:Array<productGridData> = [];
  //------------------------------------------------------

  //----------------------- OUTPUTS -------------------------------
  @Output() itemClicked = new EventEmitter<String>();
  //---------------------------------------------------------------

  //---------- GLOBALS -----------------------------------
  mainWidth:number = 0;
  mainHeight:number = 0;
  innerWidth:number = 0;
  //------------------------------------------------------

  @HostListener('window:resize', ['$event'])
  onResize(event:any) {
    this.updateImageWH();
  }

  ngOnInit(): void {
    this.updateImageWH();
  }

  updateImageWH(){
    this.innerWidth = window.innerWidth;
    console.log(this.innerWidth);
    if(this.innerWidth > 650){
      this.mainWidth = this.imageWidth;
      this.mainHeight = this.imageHeight;
    }
    else{
      this.mainWidth = this.imageSmallWidth;
      this.mainHeight = this.imageSmallHeight;
    }
  }

  cardClicked(data:any){
    this.itemClicked.emit(data);
  }
}
