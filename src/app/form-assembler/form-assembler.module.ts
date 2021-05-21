import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormAssemblerComponent } from './form-assembler/form-assembler.component';
import { DdEventService } from '../dd-event.service';



@NgModule({
  declarations: [
    FormAssemblerComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    FormAssemblerComponent
  ],
  providers:[
    DdEventService
  ]
})
export class FormAssemblerModule { }
