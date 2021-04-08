import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { DataService } from '../services/data.service';
import { AppRoutingModule , routingComponents} from './app.routing.module';
import { LaunchYearComponent } from './launch-year/launch-year.component';
import { AllComponent } from './all/all.component';
import { DeclareVarStmt } from '@angular/compiler';
import { FormsModule } from '@angular/forms';
import { YearService } from '../services/year.service';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    LaunchYearComponent,
    AllComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [DataService,
    YearService
      ],
  bootstrap: [AppComponent]
})
export class AppModule { }
