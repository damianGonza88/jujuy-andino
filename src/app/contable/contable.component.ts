import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Caja } from '../caja.model';
import { CajaService } from '../caja.service';

@Component({
  selector: 'app-contable',
  templateUrl: './contable.component.html',
  styleUrls: ['./contable.component.css']
})
export class ContableComponent {

  cuadroFechaCaja="";
  cuadroDetalleCaja="";
  cuadroReciboCaja="";
  cuadroIngreso=0;
  cuadroEgreso=0;
  filterPost="";
  buscarDetalle='';

  constructor(private router:Router, private cajaService: CajaService){    
  }

  ngOnInit(): void {
    
    this.cajaService.obtenerCaja().subscribe(miCaja=>{
    this.caja = Object.values(miCaja);
    this.cajaService.setCaja(this.caja);
    this.dataSource = this.caja;

    });
  }

  caja:Caja[]=[];
  dataSource: Caja[]=[];

  agregarRegistro(){
    let miRegistro = new Caja(this.cuadroFechaCaja,this.cuadroDetalleCaja, this.cuadroReciboCaja, this.cuadroIngreso, this.cuadroEgreso);
    this.cajaService.agregarRegistroServicio(miRegistro);
    alert("Se agrego el registro correctamente");
    this.router.navigate(['contable']);
  }


  displayedColumns: string[] = ['position', 'fecha', 'detalle', 'recibo', 'ingreso', 'egreso', 'saldo'];

  buscaDetalle(){

    let cajaB = this.caja.filter(e=>e.detalle.toUpperCase().includes(this.buscarDetalle.toLocaleUpperCase())    
    )
    this.dataSource = cajaB;
  }

  volverInicio(){
    this.router.navigate(['']);
  }


}
