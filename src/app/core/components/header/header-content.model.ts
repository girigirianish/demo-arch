export class HeaderContentModel {
  overbrandContent: string = null;
  overbrandLinks: Array<any> = [];
  publicCustomLinks: Array<any> = [];
  constructor(overbrandContent, overbrandLinks, publicCustomLinks) {
    this.overbrandContent = overbrandContent;
    this.overbrandLinks = overbrandLinks;
    this.publicCustomLinks = publicCustomLinks;
  }
}
