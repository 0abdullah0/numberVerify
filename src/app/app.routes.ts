import { Router,RouterModule, Routes } from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import {AppComponent} from "app/app.component";
import {PhoneComponent} from "./phone/phone.component";
import {HistoryComponent} from "./history/history.component";

export const router : Routes =[
    {path : "" , redirectTo:"phone" , pathMatch:"full"},
    {path : "history", component : HistoryComponent },
    {path : "phone" , component : PhoneComponent  },
]; 

export const routes : ModuleWithProviders = RouterModule.forRoot(router);