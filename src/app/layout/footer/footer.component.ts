import { Component, Input, OnChanges } from "@angular/core";
import { FooterModel } from "./footer.model";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.pug",
  styleUrls: ["./footer.component.scss"]
})
export class FooterComponent implements OnChanges {
  @Input() portalConfig: Object;
  @Input() portalVersion: String;
  footerViewModel: FooterModel;
  public footerImage: any = "../../../assets/img/powered-by-virmedica.png";
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
  }
}
