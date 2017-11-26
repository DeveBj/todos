import { Component, ViewChild } from '@angular/core';
import { APIService } from "./services/api.services";
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private getAllUserInfo: any;
  private userID: any;
  private activeRoute: boolean = true;
  private userName:any;
  @ViewChild('todo') todo:any;
  constructor(private apiService: APIService, private _route: Router, private route: ActivatedRoute) {
    // debugger
    this.GetAllUserDeails();
    // this.activeRoute=this.todo.isShowTodos;
  }

  private GetAllUserDeails() {
    this.apiService.Get("users").subscribe(res => {
      if (res != undefined && res.length > 0) {
        this.getAllUserInfo = res;
        // debugger
      }
    });
  }
  ShowTodos(vals: any, name:any) {
    // debugger
    this.activeRoute = false
    this.userID = vals;
    this.userName=name;
    this._route.navigate(['todos'])
  }
}
