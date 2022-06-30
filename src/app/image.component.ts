import { Component } from "@angular/core";

@Component({
  selector: 'image-component',
  template: '<img src={{src}}>',
  styles: [`
    img { 
      height: 150px;
      width: 150px;
    }
  `]
})

export class ImageComponent { 
  src = 'https://angular.io/assets/images/logos/angularjs/AngularJS-Shield.svg'
}