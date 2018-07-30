import { Injectable } from "@angular/core";
import { RESTService } from "../rest/rest.service";

import { environment } from "../../../environments/environment";
@Injectable({
  providedIn: "root"
})
export class ConfigurationService {
  constructor(private restService: RESTService) {}

  fetchConfiguration(): any {
    const requestConfig = {
      headers: {
        host_name: "localhost"
      }
    };
    const configurationUrl = environment.apiUrl + "portals/login";
    return this.restService.get(configurationUrl, requestConfig);
  }

  getPortalVersion(): String {
    return environment.portalVersion;
  }
}
