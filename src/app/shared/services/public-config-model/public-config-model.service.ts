import {
  PublicConfig,
  HeaderContent,
  Link,
  LinkMaker,
  IsiContent,
  FooterConfig
} from '@app/model';

import { Injectable } from '@angular/core';

@Injectable()
export class PublicConfigModelService {
  public responseToPortalConfig(response: any): PublicConfig {
    return {
      overbrandLinks: this.responseToFooterLinkLists(response),
      footerConfig: this.responseToFooterConfig(response),
      headerContent: this.responseToHeaderContent(response),
      isiContent: this.responseToIsiContent(response)
    };
  }

  private responseToFooterConfig(response: any): FooterConfig {
    return {
      footerContent: response.footerContent,
      footerCustomerSupport: response.footerCustomerSupport,
      footerLinks: this.responseToOverbrandLinkLists(response)
    };
  }

  private responseToHeaderContent(response: any): HeaderContent {
    return {
      overbrandContent: response.overbrandContent,
      overbrandLinks: this.responseToOverbrandLinkLists(response),
      publicCustomLinks: this.responseToHeaderLinks(response)
    };
  }

  private responseToHeaderLinks(response: any): Array<Link> {
    const headerLinks = new Array();
    headerLinks.push.apply(headerLinks, [
      LinkMaker.createLink(response.headerLink1Label, response.headerLink1Url),
      LinkMaker.createLink(response.headerLink1Label, response.headerLink1Url)
    ]);
    return headerLinks;
  }

  private responseToFooterLinkLists(response: any): Array<Link> {
    const footerLinks = new Array();
    footerLinks.push.apply(footerLinks, [
      LinkMaker.createLink(response.footerLink1Label, response.footerLink1Url),
      LinkMaker.createLink(response.footerLink2Label, response.footerLink2Url),
      LinkMaker.createLink(response.footerLink3Label, response.footerLink3Url),
      LinkMaker.createLink(response.footerLink4Label, response.footerLink4Url)
    ]);
    return footerLinks;
  }

  private responseToOverbrandLinkLists(response: any): Array<Link> {
    const overbrandLinks = new Array();
    overbrandLinks.push.apply(overbrandLinks, [
      LinkMaker.createLink(
        response.overbrandLink1Label,
        response.overbrandLink1Url
      ),
      LinkMaker.createLink(
        response.overbrandLink2Label,
        response.overbrandLink2Url
      ),
      LinkMaker.createLink(
        response.overbrandLink3Label,
        response.overbrandLink3Url
      )
    ]);
    return overbrandLinks;
  }

  private responseToIsiContent(response: any): IsiContent {
    return {
      isiHeaderContent: response.isiHeaderContent,
      isiPageContent: response.isiPageContent,
      isiDisClaimer: response.isiDisclaimer
    };
  }
}
