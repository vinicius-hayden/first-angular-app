import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titlePage = 'Testing!'
  getMin(a: Number, b: Number) { 
    if(a < b) { 
      return a;
    } else { 
      return b;
    }
  }
}