export class Caja{

    constructor(fecha:string, detalle:string, recibo:string, ingreso: number, egreso: number){

        this.fecha=fecha;
        this.detalle = detalle;
        this.recibo = recibo;
        this.ingreso=ingreso;
        this.egreso = egreso;
    }
    
    fecha: string ;
    detalle:string;
    recibo: string;
    ingreso: number=0;
    egreso: number=0;

}