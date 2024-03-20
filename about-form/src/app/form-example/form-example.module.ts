import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormExampleRoutingModule } from './form-example-routing.module';
import { MainComponent } from './main/main.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    FormExampleRoutingModule,
    ReactiveFormsModule,
    // FormsModule
  ]
})
export class FormExampleModule { }
