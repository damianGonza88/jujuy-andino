import { Injectable } from "@angular/core";
import { DataService } from "./data.services";
import { Caja } from "./caja.model";

@Injectable()

export class CajaService{

    constructor(private dataService:DataService){}

   
    setCaja(miCaja:Caja[]){
        this.caja = miCaja;        

    }

    obtenerCaja(){

        return this.dataService.cargarCaja();
        
    }

    caja:Caja[]=[];

    agregarRegistroServicio(miRegistro: Caja){

        this.caja.push(miRegistro);
        this.dataService.guardarRegistro(this.caja);

    }


    // actualizarSocioServicio(indice:number, socio:Socio){

    //     let socioModificado = this.socios[indice];

    //     socioModificado.nombre = socio.nombre;
    //     socioModificado.apellido = socio.apellido;
    //     socioModificado.dni = socio.dni;
    //     socioModificado.fechaNac = socio.fechaNac;
    //     socioModificado.domicilio = socio.domicilio;
    //     socioModificado.telefono = socio.telefono;
    //     socioModificado.fechaIns = socio.fechaIns;
    //     socioModificado.cuota = socio.cuota;
    //     socioModificado.cargo = socio.cargo;
    //     socioModificado.estudios = socio.estudios;
    //     socioModificado.checked = socio.checked;

    //     this.dataService.actualizarSocio(indice,socio);
    // }

    // eliminarSocioServicio(indice:number){

    //     if (confirm("¿Desea Eliminar el Socio: "+this.socios[indice].apellido +", " + this.socios[indice].nombre+" ?")) {
    //         this.socios.splice(indice,1);

    //         this.dataService.eliminarSocio(indice);

    //         if (this.socios != null) this.dataService.guardarSocios(this.socios);
    //     }        

    // }


    
   

}