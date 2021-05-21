import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlsComponent } from './controls/controls.component';
import {MatButtonModule} from '@angular/material/button';
import {DdEventService} from '../dd-event.service';



@NgModule({
  declarations: [
    ControlsComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule
  ],
  exports:[
    ControlsComponent
  ],
  providers:[DdEventService]
})
export class ControlsModulesModule { }
