import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { fireBaseConfig } from "../environments/firebase.config";

import { StoreModule } from "@ngrx/store";

import { RootReducer } from "./store/index";

import { CoreModule } from "./core";
import { SharedModule } from "./shared";
import { FeaturesModule } from "./features";

import { AppComponent } from "./app.component";

const imports = [
  BrowserModule,
  CoreModule,
  SharedModule,
  FeaturesModule,
  HttpClientModule,
  AngularFireModule.initializeApp(fireBaseConfig),
  AngularFireDatabaseModule,
  StoreModule.forRoot(RootReducer)
];

@NgModule({
  declarations: [AppComponent],
  imports: imports,
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
