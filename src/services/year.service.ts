import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class YearService {
    private year;

    setYear(year){
        this.year = year;
        console.log(this.year+" Set.");
    }
    getYear(){
        return this.year;
    }
}