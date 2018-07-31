import {
  NgModule,
  Optional,
  SkipSelf,
  ModuleWithProviders
} from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreComponentsModule } from './components/core-components.module';

import { ConfigurationService, RestService } from './services/';

@NgModule({
  imports: [CommonModule],
  declarations: [],
  exports: [CoreComponentsModule]
})
export class CoreModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: CoreModule
  ) {
    if (parentModule) {
      throw new Error(
        `${parentModule} has already been loaded. Import Core module in the AppModule only.`
      );
    }
  }

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [RestService, ConfigurationService]
    };
  }
}
