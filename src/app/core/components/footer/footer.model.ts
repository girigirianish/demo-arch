export class FooterModel {
  footerContent: string;
  footerCustomerSupport: string;
  footerLinks: Array<any>;
  constructor(footerContent, footerCustomeSupport, footerLinks) {
    this.footerContent = footerContent;
    this.footerCustomerSupport = footerCustomeSupport;
    this.footerLinks = footerLinks;
  }
}
