import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaginacioComponent } from './projecte/components/paginacio/paginacio.component';
import { FixaComponent } from './projecte/components/fixa/fixa.component';

@NgModule({
  declarations: [
    AppComponent,
    PaginacioComponent,
    FixaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
