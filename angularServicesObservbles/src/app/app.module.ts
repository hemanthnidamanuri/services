import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { HttpClientModule , HTTP_INTERCEPTORS } from "@angular/common/http";

import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { routes } from "../routes";
import { ErrorComponent } from './error/error.component';
import { HttpErrorInterceptor } from "./error.interceptor";

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    [RouterModule.forRoot(routes)],
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
