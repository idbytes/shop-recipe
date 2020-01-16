import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Recipe Shop';
  displayRecipe = true;
  displayShopping = false;

  constructor(){

  }

  onNavigate(componentName: string){
    if(componentName==="recipes"){
      this.displayRecipe = true;
      this.displayShopping = false;
    }
    else{
      this.displayShopping = true;
      this.displayRecipe = false;
    }
  }
}
