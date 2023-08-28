import { Component, OnInit } from '@angular/core';

import firebase from 'firebase/compat/app';
import { LoginService } from './login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  titulo = 'Jujuy Andino';

  constructor(private loginService:LoginService){

  }

  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: "AIzaSyA_jUuy1ePpDkMyqtkXsN_XUGkGbA1DqOY",
      authDomain: "sociosjujuyandino.firebaseapp.com",
    })
  }

  estaLogueado(){
    return this.loginService.estaLogueado();
  }

  logOut(){
    this.loginService.logout();
  }
  
}
