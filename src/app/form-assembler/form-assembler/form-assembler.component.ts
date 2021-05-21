import { Component, OnInit } from '@angular/core';
import { DdEventService } from '../../dd-event.service';

@Component({
  selector: 'app-form-assembler',
  templateUrl: './form-assembler.component.html',
  styleUrls: ['./form-assembler.component.css']
})
export class FormAssemblerComponent implements OnInit {

  constructor(private ddService: DdEventService) { }

  ngOnInit(): void {
  }

  tempDrop(ev: any){
    this.ddService.drop(ev);
  }

  tempAllowDrop(ev: any){
    this.ddService.allowDrop(ev)
  }

}
