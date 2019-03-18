import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AgmCoreModule } from '@agm/core';
import { AgmDirectionModule } from 'agm-direction';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AgmDirectionModule,
    AgmCoreModule.forRoot({
      apiKey:'AIzaSyBvEpZY_5HN63CivF1CVgUc_dNpbtB1VOU'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
