import { Component, OnInit } from '@angular/core';
import {NumVerifingService} from '../num-verifing.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  numbers :number[];


  constructor(private numService : NumVerifingService) {
    this.numbers=this.numService.getHistory();
   }

  ngOnInit() {
    console.log(this.numService.getHistory().length);
  }

}
