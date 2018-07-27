import { Component, Input, OnChanges } from "@angular/core";
import { HeaderContentModel } from "./header-content.model";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent {
  @Input() portalConfig: Object;

  headerContent: HeaderContentModel = new HeaderContentModel(null, [], []);

  constructor() {}

  ngOnChanges(changes: any): void {
    let publicConfig = changes.portalConfig.currentValue;
    if (publicConfig) {
      this.headerContent = new HeaderContentModel(
        publicConfig.overbrandContent,
        publicConfig.overbrandLinks,
        this.populateHeaderLinks(publicConfig)
      );
    }

    console.log(this.headerContent, "header content from header");
  }

  populateHeaderLinks(publicData): Array<any> {
    let publicLinks = [];
    var headerObj = { label: "", href: "" };
    publicData.headerLink1Label
      ? (headerObj.label = publicData.headerLink1Label)
      : "";
    publicData.headerLink1Url
      ? (headerObj.href = publicData.headerLink1Url)
      : "";
    headerObj = { label: "", href: "" };
    publicData.headerLink2Label
      ? (headerObj.label = publicData.headerLink2Label)
      : "";
    publicData.headerLink2Url
      ? (headerObj.href = publicData.headerLink2Url)
      : "";

    publicLinks.push(headerObj);

    return publicLinks;
  }
}