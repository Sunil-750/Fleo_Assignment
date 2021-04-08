import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { YearService } from '../services/year.service';
import { SuccessfullyLandComponent } from './successfully-land/successfully-land.component';
declare const myFunction : any;
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  public data : Object = [];
  public currentRoute='All';
  public year;
  constructor( private dataService : DataService,
                private router:Router,
                private yrService:YearService) {

  }

  ngAfterViewInit(){
    console.log("view init");
    $(document).on('click','.topnav a', function(){
      $(this).addClass('active').siblings().removeClass('active');
    });
  }
  

  myFunction(){
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  ngOnInit(){
    this.router.navigate(['/all-launch']);
  }
  toAllLaunch(){
    this.router.navigate(['/all-launch']);
  }
  toSuccessfulLaunch(){
    
    console.log("successfullLaunch clicked.");
    this.router.navigate(['/successfull-launch']);
  }
  toSuccessFullLand(){
    
    console.log("successfullLand clicked.");
    this.router.navigate(['/successfull-land']);
  }
  toLaunchYear(){
    
    console.log("LaunchYear clicked."+this.year);
    this.yrService.setYear(this.year);
    this.router.navigate(['/launch-year']);
  }
}
