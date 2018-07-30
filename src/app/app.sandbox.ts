import { Injectable } from "@angular/core";

import { Observable } from "rxjs";

import { map } from "rxjs/operators";

import { ConfigurationService } from "./service/configuration/configuration.service";

@Injectable({ providedIn: "root" })
export class AppSandboxService {
  constructor(private configurationService: ConfigurationService) {}
  fetchConfiguration(): Observable<any> {
    return this.configurationService.fetchConfiguration().pipe(
      map(response => {
        return this.formatPublicConfigData(response);
      })
    );
  }

  getPortalVersion(): String {
    return this.configurationService.getPortalVersion();
  }

  formatPublicConfigData(response) {
    response.overbrandLinks = [];
    response.footerLinks = [];

    if (response.overbrandLink1Label && response.overbrandLink1Url) {
      response.overbrandLinks.push({
        label: response.overbrandLink1Label,
        href: response.overbrandLink1Url
      });
      delete response.overbrandLink1Label;
      delete response.overbrandLink1Url;
    }
    if (response.overbrandLink2Label && response.overbrandLink2Url) {
      response.overbrandLinks.push({
        label: response.overbrandLink2Label,
        href: response.overbrandLink2Url
      });
      delete response.overbrandLink2Label;
      delete response.overbrandLink2Url;
    }
    if (response.overbrandLink3Label && response.overbrandLink3Url) {
      response.overbrandLinks.push({
        label: response.overbrandLink3Label,
        href: response.overbrandLink3Url
      });
      delete response.overbrandLink3Label;
      delete response.overbrandLink3Url;
    }
    if (response.footerLink1Label && response.footerLink1Url) {
      response.footerLinks.push({
        label: response.footerLink1Label,
        href: response.footerLink1Url
      });
      delete response.footerLink1Label;
      delete response.footerLink1Url;
    }
    if (response.footerLink2Label && response.footerLink2Url) {
      response.footerLinks.push({
        label: response.footerLink2Label,
        href: response.footerLink2Url
      });
      delete response.footerLink2Label;
      delete response.footerLink2Url;
    }
    if (response.footerLink3Label && response.footerLink3Url) {
      response.footerLinks.push({
        label: response.footerLink3Label,
        href: response.footerLink3Url
      });
      delete response.footerLink3Label;
      delete response.footerLink3Url;
    }
    if (response.footerLink4Label && response.footerLink4Url) {
      response.footerLinks.push({
        label: response.footerLink4Label,
        href: response.footerLink4Url
      });
      delete response.footerLink4Label;
      delete response.footerLink4Url;
    }
    return response;
  }
}
