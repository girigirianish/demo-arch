import { Injectable } from "@angular/core";

import { ConfigurationService } from "../../service/configuration/configuration.service";

@Injectable()
export class LoginSandbox {
  constructor(private configurationService: ConfigurationService) {}
  fetchConfiguration(): any {
    return this.configurationService.fetchConfiguration();
  }
}
