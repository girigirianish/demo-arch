import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ConfigurationService } from '@app/core/services';
import { PublicConfigModelService } from '@app/shared/services';

@Injectable({ providedIn: 'root' })
export class AppSandboxService {
  constructor(
    private configurationService: ConfigurationService,
    private modelToObjectConverter: PublicConfigModelService
  ) {}

  fetchConfiguration(): Observable<any> {
    return this.configurationService.fetchConfiguration().pipe(
      map(response => {
        return this.modelToObjectConverter.responseToPortalConfig(response);
      })
    );
  }

  getPortalVersion(): String {
    return this.configurationService.getPortalVersion();
  }
}
