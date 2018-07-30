import {PublicConfig, FooterLinks, OverbrandLinks} from "../../model/PublicConfig";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class ModelToObjectConverter {

  public responseToPortalConfig(response: any): PublicConfig {
    return {
      overbrandLinks: this.responseToFooterLinkLists(response),
      footerLinks: this.responseToOverbrandLinkLists(response)
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