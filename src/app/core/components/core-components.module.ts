import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderModule } from './header/header.module';
import { FooterModule } from './footer/footer.module';
import { IsiModule } from './isi/isi.module';

const imports = [CommonModule];

@NgModule({
  imports: imports,
  declarations: [],
  exports: [FooterModule, HeaderModule, IsiModule]
})
export class CoreComponentsModule {}
