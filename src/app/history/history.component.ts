import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  historyArr: any=[];

  constructor(public appService: AppService) { }

  ngOnInit() {


    // getting all the games from localStorage
    // this.historyArr =JSON.parse(localStorage.getItem('triviaHistory'))

    console.log("histry  array",this.historyArr)
    this.getAllQuestion()
  }


  public getAllQuestion = () =>{
    this.appService.getAllQuestions().subscribe((apiResponse) =>{
      if(apiResponse.status === 200){
        this.historyArr = apiResponse.data
        console.log('inside apiresponse of status 200',apiResponse);
      } else{
        console.log('inside apiresponse',apiResponse);
      }
    })
  }

}
