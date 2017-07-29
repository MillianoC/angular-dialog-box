import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { DialogService } from "./services/dialog.service";
import { DialogModule } from './components/dialog/dialog.module';


@NgModule({
  declarations: [ AppComponent ],
  imports: [
    BrowserModule,
    DialogModule
  ],
  providers: [
    DialogService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
