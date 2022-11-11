import { Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'gs-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  constructor() {}

  //------------------- INPUTS ---------------------------
  @Input() modalWidth:string = "95vw";
  @Input() modalHeight:string = "95vh";
  @Input() modalBorderRadius:string = "5px";
  @Input() headerHeight:number = 10;
  @Input() footerHeight:number = 10;
  @Input() showModal:boolean = false;
  @Input() modalBackgroundColor:string = "transparent";
  @Input() showHeader:boolean = true;
  @Input() showFooter:boolean = true;
  @Input() transitionTime:number = 0.8;
  @Input() modalZIndex:number = 20;
  @Input() HeaderBackgroundColor:string = "transparent";
  @Input() ContentBackgroundColor:string = "transparent";
  @Input() FooterBackgroundColor:string = "transparent";
  //-----------------------------------------------------

  //------------------- GLOBALS ---------------------------
  contentHeight:number = 0;
  mainWidth:string = "0px";
  mainHeight:string = "0px";
  modalBackTransition:string = "";
  modalTransition:string = "";
  //-------------------------------------------------------

  //------------------- OUTPUTS ---------------------------
  @Output() closeModal = new EventEmitter<any>();
  //-------------------------------------------------------

  ngOnInit(): void {
    this.setContentHeight();
    this.setTransitions();
  }

  ngOnChanges() {
    this.showHideModal();
  }

  setTransitions(){
    this.modalBackTransition = "opacity " + this.transitionTime + "s ease-in-out";
    this.modalTransition = this.transitionTime + "s ease-in-out";
  }

  showHideModal(){
    if(this.showModal){
      this.mainWidth = this.modalWidth;
      this.mainHeight = this.modalHeight
    }
    else{
      this.mainWidth = "0px";
      this.mainHeight = "0px";
    }
  }

  setContentHeight(){
    if(this.showHeader && this.showFooter){
      this.contentHeight = 100 - (this.headerHeight + this.footerHeight);
    }
    else if(this.showHeader && !this.showFooter){
      this.contentHeight = 100 - this.headerHeight;
    }
    else if(!this.showHeader && this.showFooter){
      this.contentHeight = 100 - this.footerHeight;
    }
  }

  closeModalFUN(closedFrom:string){
    let closeModal = {
      "closedFromClickingOutside": false,
      "closedFromXButton": false,
      "closedFromCode": false
    }

    switch(closedFrom){
      case "closedFromClickingOutside":
        closeModal.closedFromClickingOutside = true;
        break;
      case "closedFromXButton":
        closeModal.closedFromXButton = true;
        break;
      case "closedFromCode":
        closeModal.closedFromCode = true;
        break;
    }

    this.showModal = false;
    this.showHideModal();
    this.closeModal.emit(closeModal);
  }
}
