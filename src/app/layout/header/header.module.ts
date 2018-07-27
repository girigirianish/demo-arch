import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./header.component";
import { NavComponent } from "./nav/nav.component";

@NgModule({
  imports: [CommonModule],
  declarations: [HeaderComponent, NavComponent],
  exports: [HeaderComponent]
})
export class HeaderModule {}
