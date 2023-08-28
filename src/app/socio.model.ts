import { Pago } from "./pago.model";

export class Socio{

    constructor(apellido:string, nombre: string, dni:number, fechaNac:string, fechaIns:string, cuotaN:Pago[],
    domicilio: string, telefono: string, cargo:string, estudios:boolean, checked:boolean){

        this.nombre=nombre;
        this.apellido=apellido;
        this.dni=dni;
        this.fechaNac=fechaNac;
        this.fechaIns=fechaIns;
        this.cuota = cuotaN;
        this.domicilio=domicilio;
        this.telefono=telefono;
        this.cargo = cargo;
        this.checked = checked;
        this.estudios = estudios;

    }
    
    nombre: string ="";
    apellido:string="";
    dni:number=0;
    fechaNac: string;
    fechaIns:string;
    cuota: Pago[] = [];
    domicilio: string="";
    telefono: string="";
    cargo: string="";
    checked:boolean=false;
    estudios:boolean=false;

   

}