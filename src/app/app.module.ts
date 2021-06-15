import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {NumVerifingService} from './num-verifing.service'
import { AppComponent } from './app.component';
import { PhoneComponent } from './phone/phone.component';
import { HistoryComponent } from './history/history.component';
import {routes} from './app.routes'

@NgModule({
  declarations: [
    AppComponent,
    PhoneComponent,
    HistoryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routes
  ],
  providers: [NumVerifingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
