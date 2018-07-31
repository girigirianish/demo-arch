import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IsiComponent } from "./isi.component";
import { IsiDirective } from "../../../directive/isi/isi.directive";

@NgModule({
  imports: [CommonModule],
  declarations: [IsiComponent, IsiDirective],
  exports: [IsiComponent]
})
export class IsiModule {}
