import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PugTestComponent} from './pug-test.component';

@NgModule({
  imports: [CommonModule],
  declarations: [PugTestComponent],
  exports: [PugTestComponent]
})
export class PugTestModule {}
