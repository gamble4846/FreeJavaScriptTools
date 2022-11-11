import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PasswordGeneratorRoutingModule } from './password-generator-routing.module';
import { OpenerComponent } from './opener/opener.component';


@NgModule({
  declarations: [
    OpenerComponent
  ],
  imports: [
    CommonModule,
    PasswordGeneratorRoutingModule
  ]
})
export class PasswordGeneratorModule { }
