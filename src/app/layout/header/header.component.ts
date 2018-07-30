import { Component, Input, OnChanges } from "@angular/core";
import { HeaderContentModel } from "./header-content.model";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.pug",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnChanges {
  @Input() portalConfig: Object;

  headerContent: HeaderContentModel = new HeaderContentModel(null, [], []);

  constructor() {}

  ngOnChanges(changes: any): void {
    const publicConfig = changes.portalConfig.currentValue;
    if (publicConfig) {
      this.headerContent = new HeaderContentModel(
        publicConfig.overbrandContent,
        publicConfig.overbrandLinks,
        publicConfig.publicCustomLinks
      );
    }
  }
}
