import { Component, OnInit } from "@angular/core";

import { AppSandboxService } from "./app.sandbox";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  portalPublicConfig: Object = { isiHeaderContent: "", isiPageContent: "" };
  portalVersion: String;
  constructor(private appSandboxService: AppSandboxService) {}

  ngOnInit() {
    this.appSandboxService.fetchConfiguration().subscribe(data => {
      this.portalPublicConfig = data;
      this.portalVersion = this.appSandboxService.getPortalVersion();
    });
  }
}
