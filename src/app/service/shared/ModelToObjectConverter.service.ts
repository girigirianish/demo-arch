import {PublicConfig, FooterLinks, OverbrandLinks, HeaderContent, HeaderLinks} from '../../model/PublicConfig';
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: "root"
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

  public responseToFooterLink(label: string, href: string): FooterLinks {
    return {
      label: label,
      href: href
    };
  }

  public responseToOverbrandLink(label: string, href: string): OverbrandLinks {
    return {
      label: label,
      href: href
    };
  }

  public responseToHeaderLink(label: string, href: string): HeaderLinks {
    return {
      label: label,
      href: href
    };
  }

  public responseToHeaderLinks(response: any): HeaderLinks[] {
    const headerLinks = new Array();
    headerLinks.push(this.responseToHeaderLink( response.headerLink1Label,  response.headerLink1Url));
    headerLinks.push(this.responseToHeaderLink( response.headerLink2Label,  response.headerLink2Label));
    return headerLinks;
  }

  public responseToFooterLinkLists(response: any): FooterLinks[] {
    const footerLinks = new Array();
    footerLinks.push(this.responseToFooterLink( response.footerLink1Label,  response.footerLink1Url));
    footerLinks.push(this.responseToFooterLink( response.footerLink2Label,  response.footerLink2Url));
    footerLinks.push(this.responseToFooterLink( response.footerLink3Label,  response.footerLink3Url));
    footerLinks.push(this.responseToFooterLink( response.footerLink4Label,  response.footerLink4Url));
    return footerLinks;
  }

  public responseToOverbrandLinkLists(response: any): OverbrandLinks[] {
    const overbrandLinks = new Array();
    overbrandLinks.push(this.responseToOverbrandLink( response.overbrandLink1Label,  response.overbrandLink1Url));
    overbrandLinks.push(this.responseToOverbrandLink( response.overbrandLink2Label,  response.overbrandLink2Url));
    overbrandLinks.push(this.responseToOverbrandLink( response.overbrandLink3Label,  response.overbrandLink3Url));
    return overbrandLinks;
  }

}
