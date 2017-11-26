import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ClarityModule } from 'clarity-angular';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { APIService } from "./services/api.services";
import { HttpModule } from '@angular/http';
import { RouterModule, Router, ROUTES } from '@angular/router';
import { router } from "./app.route";
import { TodosComponent } from "./todos/todos.component";

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent
  ],
  imports: [
    BrowserModule,
    ClarityModule.forRoot(),
    FormsModule,
    BrowserAnimationsModule,
    HttpModule,
    RouterModule,
    router
  ],
  providers: [APIService],
  bootstrap: [AppComponent]
})
export class AppModule { }
