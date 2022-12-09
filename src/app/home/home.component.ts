import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

 person =
  {
    name : null,
    email : null,
    age : 18
 };
 data:any[] = [];

 addUser()
 {
  this.data.push({...this.person});
 }

}
