import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { LoginModule } from "./login/login.module";

const imports = [CommonModule];

@NgModule({
  imports: imports,
  declarations: [],
  exports: [LoginModule]
})
export class FeaturesModule {}
