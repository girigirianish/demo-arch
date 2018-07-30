import { Component, Input, OnChanges } from "@angular/core";
import { IsiModel } from "./isi.model";

@Component({
  selector: "app-isi",
  templateUrl: "./isi.component.pug",
  styleUrls: ["./isi.component.scss"]
})
export class IsiComponent implements OnChanges {
  @Input() portalConfig: Object;

  isiContent: IsiModel = new IsiModel(null, null, null, null);
  constructor() {}

  ngOnChanges(changes: any): void {
    const publicConfig = changes.portalConfig.currentValue;
    if (publicConfig) {
      this.isiContent = new IsiModel(
        publicConfig.isiHeaderContent,
        publicConfig.isiPageContent,
        publicConfig.isiDisclaimer,
        this.parseStickyISIContent(publicConfig.isiPageContent)
      );
    }
  }

  parseStickyISIContent(isiContent): string {
    //first replacing <br/> tags with <br> tags if there are any
    isiContent = isiContent.replace(/<br\/>/g, "<br>");
    //'4' has been added so as to include the br tag as well
    let str1 = isiContent.substring(0, isiContent.indexOf("<br>") + 4);
    let str2 = isiContent.substring(
      isiContent.indexOf("<br>") + 4,
      isiContent.length
    );
    let str3 = str2.substring(0, str2.indexOf("<br>") + 4);
    return str1 + str3;
  }

  getFullIsiContent(): void {}
}
