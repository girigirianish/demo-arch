import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';

import { LoginSandbox } from './login.sanbox';

@NgModule({
  imports: [CommonModule],
  declarations: [LoginComponent],
  exports: [LoginComponent],
  providers: [LoginSandbox]
})
export class LoginModule {}
