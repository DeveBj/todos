import { Component, Input, Output } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { APIService } from "../services/api.services";
import { AppSettings } from "../const";
import { EventEmitter } from "events";

@Component({
    moduleId: module.id,
    selector: 'todos',
    templateUrl: 'todos.component.html',
    styleUrls: ['todos.component.scss']
})
export class TodosComponent {
    @Input() userid: any;
    @Input() isShow: boolean;
    @Input() username:any;

    private correctPath: any;
    private queryParams: any;
    private UserID: any;
    private getAllTodos: any;
    private isShowTodos: boolean;
    private todoTitle: any;
    private strikeLine = "line-strike"
    private createID: any;
    constructor(private _route: Router, private route: ActivatedRoute, private apiService: APIService) {
    }
    ngOnInit() {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this.username
        debugger
        this.isShowTodos = this.isShow;
        this.GetAllTodos(this.userid);
    }
    GetAllTodos(id: any) {
        this.apiService.Get("todos?userId=" + id).subscribe(res => {
            if (res.length > 0) {
                this.getAllTodos = res;
                localStorage.setItem("user_todos", res)
                // console.log(res);
            }
        })
    }
    CheckCompleted(id: any, userID: any, title: any, state: boolean) {
        this.apiService.Put("todos/" + id, {
            "userId": userID,
            "id": id,
            "title": title,
            "completed": state
        }).subscribe(res => {
            if (res != null) {
                console.log("Sucessfully Updated !!!" + JSON.stringify(res));
            }
        })
    }
    CreateToDo(title: any) {
        // debugger
        let id = 200;
        this.apiService.Post("todos?userId" + this.userid, {
            "userId": this.userid,
            "id": ++id,
            "title": title,
            "completed": true
        }).subscribe(res => {
            if (res != null) {
                // debugger
                console.log("Sucessfully Created !!!" + JSON.stringify(res));
            }
        })
    }
    DeleteTodo(id: any, userID: any, title: any, state: boolean) {

        this.apiService.Delete("todos/" + id, {
            "userId": userID,
            "id": id,
            "title": title,
            "completed": state
        }).subscribe(res => {
            if (res != null) {

                console.log("Sucessfully Deleted !!!");
            }
        })
    }
    Back(){
        this._route.navigate([""]);
        this.isShowTodos=true;
    }
}

