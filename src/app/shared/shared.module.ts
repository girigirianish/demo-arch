import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { IsiModule } from "./isi/isi.module";

@NgModule({
  imports: [CommonModule],
  declarations: [],
  exports: [IsiModule]
})
export class SharedModule {}
