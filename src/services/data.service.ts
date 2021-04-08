import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
  url1 = "https://api.spaceXdata.com/v3/launches?limit=100";
  url2 = "https://api.spaceXdata.com/v3/launches?limit=100&launch_success=true";
  url3 = "https://api.spaceXdata.com/v3/launches?limit=100&launch_success=true&land_success=true";
  url4 = "https://api.spaceXdata.com/v3/launches?limit=100&launch_success=true&land_success=true&launch_year=";
  constructor(private  http:HttpClient ) {
  }
  getData(){
    return this.http.get(this.url1);
  }
  getSuccLaunchData(){
    return this.http.get(this.url2);
  }
  getSuccLandData(){
    return this.http.get(this.url3);
  }
  getDataOfPerticularYear(year:string){
    console.log(this.url4+year);
    return this.http.get(this.url4+year);
  }
}
