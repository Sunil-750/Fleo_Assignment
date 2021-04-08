import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-successfully-launch',
  templateUrl: './successfully-launch.component.html',
  styleUrls: ['./successfully-launch.component.css']
})
export class SuccessfullyLaunchComponent implements OnInit {
  public rockets:any = [];
  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.dataService.getSuccLaunchData()
    .subscribe(data=>{
      this.rockets = data;
      console.log("data arrived at successfullyLaunchComponent");
    })
  }

}
