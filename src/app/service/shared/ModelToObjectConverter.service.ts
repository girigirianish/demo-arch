import {
  PublicConfig,
  HeaderContent,
  Link,
  LinkMaker
} from '../../model/PublicConfig';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModelToObjectConverter {
  public responseToPortalConfig(response: any): PublicConfig {
    return {
      overbrandLinks: this.responseToFooterLinkLists(response),
      footerLinks: this.responseToOverbrandLinkLists(response),
      headerContent: this.responseToHeaderContent(response)
    };
  }

  public responseToHeaderContent(response: any): HeaderContent {
    return {
      overbrandContent: response.overbrandContent,
      overbrandLinks: this.responseToOverbrandLinkLists(response),
      publicCustomLinks: this.responseToHeaderLinks(response)
    };
  }

  public responseToHeaderLinks(response: any): Array<Link> {
    const headerLinks = new Array();
    const headerLink1 = LinkMaker.createLink(
      response.headerLink1Label,
      response.headerLink1Url
    );
    const headerLink2 = LinkMaker.createLink(
      response.headerLink1Label,
      response.headerLink1Url
    );
    headerLinks.push.apply(headerLinks, [headerLink1, headerLink2]);
    return headerLinks;
  }

  public responseToFooterLinkLists(response: any): Array<Link> {
    const footerLinks = new Array();
    const footerLink1 = LinkMaker.createLink(
      response.footerLink1Label,
      response.footerLink1Url
    );
    const footerLink2 = LinkMaker.createLink(
      response.footerLink2Label,
      response.footerLink2Url
    );
    const footerLink3 = LinkMaker.createLink(
      response.footerLink3Label,
      response.footerLink3Url
    );
    const footerLink4 = LinkMaker.createLink(
      response.footerLink4Label,
      response.footerLink4Url
    );
    footerLinks.push.apply(footerLinks, [
      footerLink1,
      footerLink2,
      footerLink3,
      footerLink4
    ]);
    return footerLinks;
  }

  public responseToOverbrandLinkLists(response: any): Array<Link> {
    const overbrandLinks = new Array();
    const overbrandLink1 = LinkMaker.createLink(
      response.overbrandLink1Label,
      response.overbrandLink1Url
    );
    const overbrandLink2 = LinkMaker.createLink(
      response.overbrandLink2Label,
      response.overbrandLink2Url
    );
    const overbrandLink3 = LinkMaker.createLink(
      response.overbrandLink3Label,
      response.overbrandLink3Url
    );
    overbrandLinks.push.apply(overbrandLinks, [
      overbrandLink1,
      overbrandLink2,
      overbrandLink3
    ]);
    return overbrandLinks;
  }
}
