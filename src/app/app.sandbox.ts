import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {ConfigurationService} from './core/services/configuration/configuration.service';
import {PublicConfigModelConverter} from './shared/shared/public-config-model-converter.service';

@Injectable({providedIn: 'root'})
export class AppSandboxService {

  constructor(private configurationService: ConfigurationService, private modelToObjectConverter: PublicConfigModelConverter) {
  }

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
