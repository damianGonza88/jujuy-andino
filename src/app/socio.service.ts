import { Injectable } from "@angular/core";
import { Socio } from "./socio.model";
import { DataService } from "./data.services";

@Injectable()

export class SocioService{

    constructor(private dataService:DataService){}

   
    setSocios(misSocios:Socio[]){
        this.socios = misSocios;        

    }

    obtenerSocios(){

        return this.dataService.cargarSocios();
        
    }

    socios:Socio[]=[];

    agregarSocioServicio(socio: Socio){

        this.socios.push(socio);
        this.dataService.guardarSocios(this.socios);

    }

    encontrarSocio(indice:number){

        let socio:Socio = this.socios[indice];
        return socio;

    }

    actualizarSocioServicio(indice:number, socio:Socio){

        let socioModificado = this.socios[indice];

        socioModificado.nombre = socio.nombre;
        socioModificado.apellido = socio.apellido;
        socioModificado.dni = socio.dni;
        socioModificado.fechaNac = socio.fechaNac;
        socioModificado.domicilio = socio.domicilio;
        socioModificado.telefono = socio.telefono;
        socioModificado.fechaIns = socio.fechaIns;
        socioModificado.cuota = socio.cuota;
        socioModificado.email = socio.email;
        socioModificado.estudios = socio.estudios;
        socioModificado.checked = socio.checked;

        this.dataService.actualizarSocio(indice,socio);
    }

    eliminarSocioServicio(indice:number){

        if (confirm("¿Desea Eliminar el Socio: "+this.socios[indice].apellido +", " + this.socios[indice].nombre+" ?")) {
            this.socios.splice(indice,1);

            this.dataService.eliminarSocio(indice);

            if (this.socios != null) this.dataService.guardarSocios(this.socios);
        }

        

    }
    
   

}