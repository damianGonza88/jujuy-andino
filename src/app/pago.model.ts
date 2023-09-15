export class Pago{

    constructor(fecha:string, monto: number, recibo:string){

        this.fecha=fecha;
        this.monto=monto;
        this.recibo = recibo;
    }
    
    fecha: string ;
    monto: number=0;
    recibo: string;

}