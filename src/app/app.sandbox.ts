import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { ConfigurationService } from "./service/configuration/configuration.service";
import { ModelToObjectConverter } from  "./service/shared/ModelToObjectConverter.service";

@Injectable({ providedIn: "root" })
export class AppSandboxService {
  constructor(private configurationService: ConfigurationService, private modelToObjectConverter: ModelToObjectConverter) {}
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
