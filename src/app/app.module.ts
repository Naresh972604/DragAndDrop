import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';

import { ControlsModulesModule } from './controls-modules/controls-modules.module';
import { FormAssemblerModule } from './form-assembler/form-assembler.module';
import { PreviewModulesModule } from './preview-modules/preview-modules.module';

import { DdEventService } from './dd-event.service';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    ControlsModulesModule,
    FormAssemblerModule,
    PreviewModulesModule

  ],
  providers: [DdEventService],
  bootstrap: [AppComponent]
})
export class AppModule { }
