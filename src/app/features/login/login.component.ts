import { Component, OnInit } from "@angular/core";

import { LoginSandbox } from "./login.sanbox";
import { Observable } from "rxjs";
import { share } from "../../../../node_modules/rxjs/operators";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  publicDataConfig: Observable<{}>;
  constructor(private loginSandbox: LoginSandbox) {}
  ngOnInit() {
    this.publicDataConfig = this.loginSandbox
      .fetchConfiguration()
      .pipe(share());
  }
}
