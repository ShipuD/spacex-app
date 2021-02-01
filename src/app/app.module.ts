import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { LatestLaunchesComponent } from './latest-launches/latest-launches.component';

@NgModule({
  declarations: [
    AppComponent,
    LatestLaunchesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
