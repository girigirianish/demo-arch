import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {ConfigurationService} from './core/services/configuration/configuration.service';
import {PublicConfigModelService} from './shared/services/public-config-model/public-config-model.service';

@Injectable({providedIn: 'root'})
export class AppSandboxService {

  constructor(private configurationService: ConfigurationService, private modelToObjectConverter: PublicConfigModelService) {
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
