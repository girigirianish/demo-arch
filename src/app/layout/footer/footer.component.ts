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
  constructor() {}

  ngOnChanges(changes: any): void {
    const publicConfig = changes.portalConfig.currentValue;
    if (publicConfig) {
      this.footerViewModel = new FooterModel(
        publicConfig.footerContent,
        publicConfig.footerCustomerSupport,
        publicConfig.footerLinks
      );
    }
    console.log(this.footerViewModel, "view Model");
  }
}
