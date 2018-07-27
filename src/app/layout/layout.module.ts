import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HeaderModule } from "./header/header.module";
import { FooterModule } from "./footer/footer.module";
import {PugTestModule} from './pug-test/pug-test.module';

@NgModule({
  imports: [CommonModule],
  declarations: [],
  exports: [HeaderModule, FooterModule, PugTestModule]
})
export class LayoutModule {}
