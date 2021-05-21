import { Component, OnInit } from '@angular/core';
import {DdEventService} from '../../dd-event.service';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit {

  constructor(private ddService : DdEventService) { }

  previewArr : string[] =[];
  ngOnInit(): void {
    this.previewArr=this.ddService.getControlOrder();
  }

}
