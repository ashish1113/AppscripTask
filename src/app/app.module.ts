import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { BootstrapModalModule } from 'ng6-bootstrap-modal';
import { RouterModule, Routes} from '@angular/router';
import { ToastrModule } from 'ng6-toastr-notifications';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { HomeComponent } from './home/home.component';
import { QuizComponent } from './quiz/quiz.component';
import { HistoryComponent } from './history/history.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    QuizComponent,
    HistoryComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, 
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BootstrapModalModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent, pathMatch: 'full'},
      { path: 'quiz', component: QuizComponent},
      { path: 'history', component: HistoryComponent},
      { path: '', redirectTo: 'home', pathMatch: 'full'},
      { path: '*', component: HomeComponent},
      { path: '**', component: HomeComponent},
      
    ])
  ],
  providers: [AppService],
  bootstrap: [AppComponent],

})
export class AppModule { }
