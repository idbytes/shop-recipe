import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})

export class HeaderComponent{
    @Output() componentDisplay = new EventEmitter<string>();
    constructor(){

    }

  showComponent(e){
      this.componentDisplay.emit(e.target.id);
  }
}
