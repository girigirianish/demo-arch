import { Injectable } from "@angular/core";
import { RESTService } from "../rest/rest.service";

import { environment } from "../../../environments/environment";
@Injectable({
  providedIn: "root"
})
export class ConfigurationService {
  constructor(private restService: RESTService) {}

  fetchConfiguration(): any {
    let requestConfig = {
      headers: {
        host_name: "localhost"
      }
    };
    let configurationUrl = environment.apiUrl + "portals/login";
    return this.restService.get(configurationUrl, requestConfig);
  }
}
