import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';

import {AngularMsdaModule} from 'angular-msda';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSliderModule} from '@angular/material/slider';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    AngularMsdaModule,

    BrowserAnimationsModule,
    MatCheckboxModule,
    MatSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
