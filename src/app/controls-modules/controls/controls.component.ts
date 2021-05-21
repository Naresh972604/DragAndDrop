import { Component, OnInit } from '@angular/core';
import {DdEventService} from '../../dd-event.service';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.css']
})
export class ControlsComponent implements OnInit {

  constructor(private ddService: DdEventService) { }

  ngOnInit(): void {
  }

  tempDrag(ev: any){
    this.ddService.drag(ev);
  }

}
