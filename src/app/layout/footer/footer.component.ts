import { Component, Input, OnChanges } from "@angular/core";
import { FooterModel } from "./footer.model";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.scss"]
})
export class FooterComponent implements OnChanges {
  @Input() portalConfig: Object;
  footerViewModel: FooterModel;
  private footerImage: any;
  constructor() {}

  ngOnChanges(changes: any): void {
    const publicConfig = changes.portalConfig.currentValue;
    if (publicConfig) {
      this.footerViewModel = new FooterModel(
        publicConfig.footerContent,
        publicConfig.footerCustomerSupport,
        publicConfig.footerLinks
      );
      this.footerImage = require("../../../assets/img/powered-by-virmedica.png");
    }
  }
}
