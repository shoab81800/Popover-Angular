import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.css']
})
export class PopoverComponent implements OnInit {
  showToolTip: boolean = false
  @Input() popoverMsgContent: string = ''

  constructor() { }

  ngOnInit(): void {
  }
  openToolTip(){
    if(this.showToolTip){
      this.showToolTip=false;
      return;
    }
    this.showToolTip = true
  }

  closeToolTip(e: any){
    e.preventDefault
    this.showToolTip = false
  }

}
