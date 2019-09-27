import { Injectable } from '@angular/core';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/toPromise';


@Injectable({
  providedIn: 'root'
})
export class AppService {

  private url = 'http://localhost:3000';
  // private url = "http://192.168.1.53:3000"

  constructor(public http: HttpClient, public router: Router) { }



  public SubmitQuestion(questionData): Observable<any> {
    console.log("question data for question creation in app servie:", questionData);
    const params = new HttpParams()
      .set('name', questionData.name)
      .set('bestCricketer', questionData.bestCricketer)
      .set('colorSelected', questionData.colorSelected)
      .set('colorString', questionData.colorString)
    return this.http.post(`${this.url}/api/v1/question/create`, params);
  }

  public getAllQuestions(): Observable<any> {
    return this.http.get(`${this.url}/api/v1/question/view/all`)
  }

 
}
