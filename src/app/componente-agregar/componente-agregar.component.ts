import { Component } from '@angular/core';
import { SocioService } from '../socio.service';
import { Router } from '@angular/router';
import { Socio } from '../socio.model';
import { Pago } from '../pago.model';

@Component({
  selector: 'app-componente-agregar',
  templateUrl: './componente-agregar.component.html',
  styleUrls: ['./componente-agregar.component.css']
})
export class ComponenteAgregarComponent {

  anio: number = new Date().getFullYear();
  anoEstudio:string="Estudios "+ this.anio.toString() + ":";


  constructor(private socioService: SocioService, private router:Router){

  }

  ngOnInit(): void {
    
    this.socioService.obtenerSocios().subscribe(misSocios=>{
      this.socios = Object.values(misSocios);
      this.socioService.setSocios(this.socios);
    });
  }

  socios:Socio[]=[];

  cuadroNombre: string ="";
  cuadroApellido:string="";
  cuadroDni:number=0;
  cuadroFechaNac: string = new Date().toDateString();
  cuadroFechaIns:string = new Date().toDateString();;  
  cuadroCuota: number = 0;
  cuadroFechaPago:string = new Date().toDateString();
  cuadroDomicilio: string="";
  cuadroTelefono: string="";
  cuadroCargo: string="";
  cuadroEstudios: boolean= false;

  agregarSocio(){
    let pago = new Pago(this.cuadroFechaPago,this.cuadroCuota);
    let cuota: Pago []=[];
    cuota.push(pago);
    let miSocio= new Socio(this.cuadroApellido, this.cuadroNombre, this.cuadroDni, this.cuadroFechaNac, this.cuadroFechaIns, cuota, this.cuadroDomicilio, this.cuadroTelefono, this.cuadroCargo,this.cuadroEstudios, false);
    this.socioService.agregarSocioServicio(miSocio);
    alert("Se agrego correctamente al socio: " + miSocio.apellido +", "+ miSocio.nombre);
    this.router.navigate(['socios']);
  }

  cancelar(){
    this.router.navigate(['socios']);
  }

}
