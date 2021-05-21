import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormAssemblerModule } from '../form-assembler/form-assembler.module';
import { PreviewComponent } from './preview/preview.component';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {DdEventService} from '../dd-event.service';



@NgModule({
  declarations: [
    PreviewComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatDialogModule,
    FormAssemblerModule
  ],
  exports:[
    PreviewComponent
  ],
  providers:[
    DdEventService
  ]
})
export class PreviewModulesModule { }
