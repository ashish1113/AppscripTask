import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  historyArr: any;

  constructor() { }

  ngOnInit() {


    // getting all the games from localStorage
    this.historyArr =JSON.parse(localStorage.getItem('triviaHistory'))

    console.log("histry  array",this.historyArr)
  }

}
