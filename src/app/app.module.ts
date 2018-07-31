import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRouting } from './app.routing';

import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';
import { FeaturesModule } from '@app/features';

import { AppComponent } from './app.component';

const imports = [
  BrowserModule,
  AppRouting,
  CoreModule.forRoot(),
  SharedModule.forRoot(),
  FeaturesModule,
  HttpClientModule
];

@NgModule({
  declarations: [AppComponent],
  imports: imports,
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
