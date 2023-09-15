import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Socio } from "./socio.model";
import { LoginService } from "./login/login.service";
import { Caja } from "./caja.model";
import { Router } from "@angular/router";

@Injectable()

export class DataService{

    constructor (private httpClient: HttpClient, private loginService: LoginService, private router: Router){

    }

    cargarSocios(){
        
        const token = this.loginService.getIdToken();
        return this.httpClient.get('https://sociosjujuyandino-default-rtdb.firebaseio.com/datos.json?auth=' + token);
    }

    guardarSocios(socios:Socio[]){

        //ORDENAR POR APELLIDOS
        socios.sort(function (a, b){
            return (a.apellido.localeCompare(b.apellido))
        });

        const token = this.loginService.getIdToken();
        this.httpClient.put('https://sociosjujuyandino-default-rtdb.firebaseio.com/datos.json?auth='+ token, socios).subscribe(
            response=>console.log("Se han guardado los empleados" + response),
            error=> console.log("Error: "+ error),
        );
    }

    actualizarSocio(indice:number, socio:Socio){

        const token = this.loginService.getIdToken();
        let url = 'https://sociosjujuyandino-default-rtdb.firebaseio.com/datos/' + indice + '.json?auth='+ token;

        this.httpClient.put(url, socio).subscribe(
            response=>console.log("Se ha modificado el socio" + response),
            error=> console.log("Error: "+ error),
        );

    }

    eliminarSocio(indice:number){

        const token = this.loginService.getIdToken();
        let url = 'https://sociosjujuyandino-default-rtdb.firebaseio.com/datos/' + indice + '.json?auth='+ token;

        this.httpClient.delete(url).subscribe(
            response=>console.log("Se ha eliminado el socio" + response),
            error=> console.log("Error: "+ error),
        );
        setTimeout(function(){ }, 3000);
        this.router.navigate(['socios']);  
    }

    guardarRegistro(caja:Caja[]){

        const token = this.loginService.getIdToken();
        this.httpClient.put('https://contablejujuyandino-default-rtdb.firebaseio.com/datos.json?auth='+ token, caja).subscribe(
            response=>console.log("Se han guardado el registro" + response),
            error=> console.log("Error: "+ error),
        );

    }

    cargarCaja(){
        const token = this.loginService.getIdToken();
        return this.httpClient.get('https://contablejujuyandino-default-rtdb.firebaseio.com/datos.json?auth=' + token);
    }

    

}