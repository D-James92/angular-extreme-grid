import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AngularExtremeGridComponent } from './angular-extreme-grid/angular-extreme-grid.component';


@NgModule({
  declarations: [
    AppComponent,
    AngularExtremeGridComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
