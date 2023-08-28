import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'
import { CookieService } from "ngx-cookie-service";

@Injectable()

export class LoginService{

    constructor(private router:Router, private cookie:CookieService){ }

    token: string ="";

    login(email:string, password:string){

        firebase.auth().signInWithEmailAndPassword(email, password).then(

            response=> {

                firebase.auth().currentUser?.getIdToken().then(

                    token => {

                        this.token = token;
                        this.cookie.set("token", this.token);
                        this.router.navigate(['/socios']);
                    }
                )
            }
        );

    }

    getIdToken(){
        //return this.token;
        return this.cookie.get("token");
    }

    estaLogueado(){
        //return this.token;
        return this.cookie.get("token");
    }

    logout(){
        firebase.auth().signOut().then(
            ()=>{
                this.token="";
                this.cookie.set("token",this.token);
                this.router.navigate(['/']);
            }
        )
    }
}