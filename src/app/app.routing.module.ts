import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AllComponent } from "./all/all.component";
import { LaunchYearComponent } from "./launch-year/launch-year.component";
import { SuccessfullyLandComponent } from "./successfully-land/successfully-land.component";
import { SuccessfullyLaunchComponent } from "./successfully-launch/successfully-launch.component";

const routes:Routes = [
    {path:'all-launch',component:AllComponent},
    {path: 'successfull-launch',component: SuccessfullyLaunchComponent},
    {path: 'successfull-land',component: SuccessfullyLandComponent},
    {path:'launch-year',component: LaunchYearComponent}
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule{}

export const routingComponents = [SuccessfullyLandComponent,SuccessfullyLaunchComponent,LaunchYearComponent];