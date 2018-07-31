import { Injectable } from '@angular/core';

import { ConfigurationService } from '@app/core/services';

@Injectable()
export class LoginSandbox {
  constructor(private configurationService: ConfigurationService) {}

  fetchConfiguration(): any {
    return this.configurationService.fetchConfiguration();
  }
}
