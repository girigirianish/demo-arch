export class FooterModel {
  footerContent: string = null;
  footerCustomerSupport: string = null;
  footerLinks: Array<any> = [];
  constructor(footerContent, footerCustomeSupport, footerLinks) {
    this.footerContent = footerContent;
    this.footerCustomerSupport = footerCustomeSupport;
    this.footerLinks = footerLinks;
  }
}
