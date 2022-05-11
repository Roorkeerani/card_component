import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { pricingTable } from '../pricingTable/pricingTable.component';

@NgModule({
  declarations: [
    AppComponent,
    pricingTable
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

