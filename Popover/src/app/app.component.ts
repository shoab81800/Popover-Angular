import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
