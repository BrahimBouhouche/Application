import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`<h1>{{pageTitle}}</h1>
  <h3>Welcome to {{pageTitle}} .</h3>`,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pageTitle = 'ACME Application';
}
