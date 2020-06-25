import { Component, OnInit } from '@angular/core';
import { DateUtilService } from '../date-util.service';

@Component({
  selector: 'app-timelines',
  templateUrl: './timelines.component.html',
  styleUrls: ['./timelines.component.css']
})
export class TimelinesComponent implements OnInit {

  input: any;
  output: any = '';

  constructor(private dateUntilService: DateUtilService) { }
  onChange() {
    this.output = this.dateUntilService.getDiffToNow(this.input);
  }

  onFirstChange(value: any) {
    this.input =value;
  }

  ngOnInit(): void {
  }

}
