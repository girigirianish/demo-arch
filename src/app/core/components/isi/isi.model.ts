export class IsiModel {
  isiHeader: string = null;
  isiContentBody: string = null;
  isiDisclaimer: string = null;
  stickyContent: string = null;
  constructor(isiHeader, isiContent, isiDisclaimer, stickyContent) {
    this.isiHeader = isiHeader;
    this.isiContentBody = isiContent;
    this.isiDisclaimer = isiDisclaimer;
    this.stickyContent = stickyContent;
  }
}
