
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { TodosComponent } from "./todos/todos.component";
import { AppComponent } from "./app.component";

export const routes: Routes = [
      {
        path:'',
        component:AppComponent
    },
    {
        path:'todos',
        component:TodosComponent
    }
]

export const router = RouterModule.forRoot(routes);
