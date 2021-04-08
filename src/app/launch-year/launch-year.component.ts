import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { YearService } from '../../services/year.service';

@Component({
  selector: 'app-launch-year',
  templateUrl: './launch-year.component.html',
  styleUrls: ['./launch-year.component.css']
})
export class LaunchYearComponent implements OnInit {
  public rockets:any = [];
  constructor(private yrService:YearService,
      private dataService:DataService){ }

  ngOnInit() {
    let year = this.yrService.getYear();
    this.dataService.getDataOfPerticularYear(year)
    .subscribe(data=>{
      this.rockets = data;
      console.log(data);
      console.log("data arrived at launcheYearComponent.");

    })
  } 

}
