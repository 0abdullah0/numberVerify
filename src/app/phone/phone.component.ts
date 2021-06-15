import { Component, OnInit } from '@angular/core';
import {NumVerifingService} from '../num-verifing.service';
import {Data} from '../data';

@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.css']
})
export class PhoneComponent implements OnInit {

  phone : number;
  showData : boolean;
  response : Data;

  constructor(private numService : NumVerifingService) {
    console.log("constr");
    this.showData =false;
   }

  ngOnInit() {
  }

  getData(event){
    event.preventDefault();
     console.log(this.phone);

     this.numService.getData(this.phone).subscribe(data=>{
         this.response=data;
         console.log(this.response.country_name);
         this.showData=true;
     })
  }

}
