import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import {AppRouting} from './app.routing';

import {StoreModule} from '@ngrx/store';

import {RootReducer} from './store';

import {CoreModule} from './core';
import { SharedModule } from './shared';
import {FeaturesModule} from './features';

import {AppComponent} from './app.component';

const imports = [
  BrowserModule,
  AppRouting,
  CoreModule,
  SharedModule,
  FeaturesModule,
  HttpClientModule,
  StoreModule.forRoot(RootReducer)
];

@NgModule({
  declarations: [AppComponent],
  imports: imports,
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
