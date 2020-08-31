import { Injectable } from '@angular/core';

@Injectable()
export class Globals {
  
  
  APP_URL  = "http://bd248a05a289.ngrok.io/";
  //APP_URL  = "//7d83bbbe.ngrok.io";
  APP_URL_HEROKU = "//compliancetool.herokuapp.com";
  userId: string = '';
  userName: string ="";

}