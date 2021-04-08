import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {
  public rockets:any = [];
  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.dataService.getData()
    .subscribe(data=>{
      this.rockets = data;
      console.log("data arriver at all component");
    })
  }

}
