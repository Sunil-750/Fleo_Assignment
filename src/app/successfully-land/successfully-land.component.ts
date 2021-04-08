import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-successfully-land',
  templateUrl: './successfully-land.component.html',
  styleUrls: ['./successfully-land.component.css']
})
export class SuccessfullyLandComponent implements OnInit {
  public rockets:any = [];
  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.dataService.getSuccLandData()
    .subscribe(data=>{
      this.rockets = data;
      console.log("data arrived at SuccessfullyLandComponent");
    })
  }

}
