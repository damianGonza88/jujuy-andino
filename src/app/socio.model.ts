import { Pago } from "./pago.model";

export class Socio{

    constructor(apellido:string, nombre: string, dni:number, fechaNac:string, fechaIns:string, cuotaN:Pago[],
    domicilio: string, telefono: string, email:string, estudios:string, checked:boolean){

        this.nombre=nombre;
        this.apellido=apellido;
        this.dni=dni;
        this.fechaNac=fechaNac;
        this.fechaIns=fechaIns;
        this.cuota = cuotaN;
        this.domicilio=domicilio;
        this.telefono=telefono;
        this.email = email;
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
    email: string="";
    checked:boolean=false;
    estudios:string="";

   

}