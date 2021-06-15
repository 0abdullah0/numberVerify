import { Injectable } from '@angular/core';
import {Http,Headers} from '@angular/http';
import 'rxjs/add/operator/map';
var exampleArray = []

@Injectable()
export class NumVerifingService {



  constructor(private http:Http) { 
    console.log("task service init");
  }

  getHistory(){
    return exampleArray;
  }

  getData(phone){
    /*return this.http.get('http://localhost:3000/task/numverify/'+phone)
    .map((res)=>res.json);*/
    
    return this.http.get('http://apilayer.net/api/validate?access_key=709320aa78b239c76d3b70fc09833036&number='+phone+'&country_code=&format=1')
    .map((res)=>{
      exampleArray.push(phone);
      console.log(res.json());
      return res.json();
    });

  }

}
