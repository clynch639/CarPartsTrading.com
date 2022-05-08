import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { WebService } from './web.service';
import { HttpClientModule} from '@angular/common/http';
import { RouterModule } from '@angular/router';
import {HomeComponent} from './home.component';
import { ReactiveFormsModule} from '@angular/forms';
import{ AuthModule} from '@auth0/auth0-angular';
import{ NavComponent} from './nav.component';
import{ TyresComponent} from './tyres.component';
import{PostAdComponent} from './postad.component';
import{EngineOilComponent} from './engine.component';
import{BrakesComponent} from './brakes.component';
import{BatteriesComponent} from './batteries.component';
import{FiltersComponent} from './filters.component';
import{VintagePartsComponent} from './vintageparts.component';
import { TyreComponent } from './tyre.component';
import { OilComponent } from './oil.component';
import { BatteryComponent } from './battery.component';
import { BrakeComponent } from './brake.component';
import { VintagePartComponent } from './vintagepart.component';
import { FilterComponent } from './filter.component';
import{MyAdsComponent} from './myads.component';
import { MyAdComponent } from './myad.component';

var routes: any =[
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'postad',
    component: PostAdComponent
  },
  {
    path: 'myads',
    component: MyAdsComponent
  },
  {
    path: 'myads/:id',
    component: MyAdComponent
  },
  {
    path: 'tyres',
    component: TyresComponent
  },
  {
    path: 'tyres/:id',
    component:TyreComponent
  },
  {
    path: 'engineoil',
    component: EngineOilComponent
  },
  {
    path: 'engineoil/:id',
    component:OilComponent
  },
  {
    path: 'brakes',
    component: BrakesComponent
  },
  {
    path: 'brakes/:id',
    component:BrakeComponent
  },
  {
    path: 'batteries',
    component: BatteriesComponent
  },
  {
    path: 'batteries/:id',
    component:BatteryComponent
  },
  {
    path: 'filters',
    component: FiltersComponent
  },
  {
    path: 'filters/:id',
    component:FilterComponent
  },
  {
    path: 'vintageparts',
    component: VintagePartsComponent
  },
  {
    path: 'vintageparts/:id',
    component:VintagePartComponent
  },



];

@NgModule({
  declarations: [
    AppComponent,  HomeComponent, FiltersComponent, VintagePartsComponent,
    NavComponent, TyresComponent, EngineOilComponent, BrakesComponent, BatteriesComponent, TyreComponent, BatteryComponent,
    MyAdsComponent
  ],
  imports: [
    BrowserModule, 
    HttpClientModule,
    RouterModule.forRoot(routes), ReactiveFormsModule,
    AuthModule.forRoot( {
      domain: 'dev-ipcjiv2r.us.auth0.com',
      clientId: '0xyKSVURgOfr5p1BaE1DMmhpYpI5aGIE',
    })
  ],
  providers: [WebService],
  bootstrap: [AppComponent]
})
export class AppModule { }
