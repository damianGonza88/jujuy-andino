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

      //apiKey: "AIzaSyDl_IsX8tJwQg4DFDNE6SIUZiKbZ9GTmNY",
      //authDomain: "contablejujuyandino.firebaseapp.com",

    })

    //LISTA DE LOS ELEMENTOS DEL MENU
    let menuItems = document.querySelectorAll('.nav-link');

    //COTROLADOR DE CLICK A LOS ITEMS DEL MENU
    menuItems.forEach(item => {

      item.addEventListener('click', function(){

        menuItems.forEach(item => {

          item.classList.remove('active');
          
        });

        //AGREGA LA CLASE ACTIVE AL SELECCIONADO
        item.classList.add('active');
      })
      
    });

  }

  estaLogueado(){
    return this.loginService.estaLogueado();
  }

  logOut(){
    this.loginService.logout();
  }

  


  
}
