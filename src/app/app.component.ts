import { Component } from '@angular/core';
import { UsersService } from "./users.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first-ng-cli-project';
  constructor(private user:UsersService){
    
  }
  getValues(val: any){
    this.user.getData(val.MRP , val.last).subscribe((result)=>{
      console.warn("result",result)
    })
  }
}
