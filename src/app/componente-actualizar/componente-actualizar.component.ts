import { Component } from '@angular/core';
import { Socio } from '../socio.model';
import { SocioService } from '../socio.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Pago } from '../pago.model';

@Component({
  selector: 'app-componente-actualizar',
  templateUrl: './componente-actualizar.component.html',
  styleUrls: ['./componente-actualizar.component.css']
})
export class ComponenteActualizarComponent {

  anio: number = new Date().getFullYear();
  anoEstudio:string="Estudios "+ this.anio.toString() + ":";

  constructor(private socioService: SocioService, private router:Router, private route:ActivatedRoute){

    //this.socios = this.socioService.socios;

  }

  ngOnInit(): void {
    this.socios = this.socioService.socios;
    this.indice = this.route.snapshot.params['id'];
    let socio:Socio = this.socioService.encontrarSocio(this.indice);

    this.cuadroApellido=socio.apellido;
    this.cuadroNombre = socio.nombre;
    this.cuadroDni = socio.dni;
    this.cuadroFechaNac= socio.fechaNac;
    this.cuadroDomicilio = socio.domicilio;
    this.cuadroTelefono = socio.telefono;
    this.cuadroFechaIns = socio.fechaIns;
    this.cuadroCuotaA;
    this.cuadroFechaPagoA;
    this.cuadroCargo = socio.cargo;
    this.cuadroEstudios = socio.estudios;
  }

  socios:Socio[]=[];

  cuadroNombre: string ="";
  cuadroApellido:string="";
  cuadroDni:number=0;
  cuadroFechaNac: string = new Date().toDateString();
  cuadroFechaIns:string = new Date().toDateString();
  cuadroCuotaA: number=0;
  cuadroFechaPagoA:string = new Date().toDateString();
  cuadroDomicilio: string="";
  cuadroTelefono: string="";
  cuadroCargo: string="";
  cuadroEstudios:boolean = false;

  indice:number=0;

  actualizarSocio(){    
     
    let pago = this.socios[this.indice].cuota;
    let miSocio= new Socio(this.cuadroApellido, this.cuadroNombre, this.cuadroDni, this.cuadroFechaNac, this.cuadroFechaIns, pago, this.cuadroDomicilio, this.cuadroTelefono, this.cuadroCargo, this.cuadroEstudios, false );
    this.socioService.actualizarSocioServicio(this.indice, miSocio);
    alert("Se modifico correctamente al socio: " + miSocio.apellido +", "+ miSocio.nombre);
    this.router.navigate(['socios']);
  }

  eliminarSocio(){

    this.socioService.eliminarSocioServicio(this.indice);
    this.router.navigate(['socios']);

  }

  cancelar(){

    this.router.navigate(['socios']);
  }

  agregarPago(){

    let cuota = this.socios[this.indice].cuota;
    let pago = new Pago(this.cuadroFechaPagoA,this.cuadroCuotaA);
    cuota.push(pago);
    cuota.sort((a,b)=> (Date.parse(b.fecha)) - (Date.parse(a.fecha)));

    let miSocio= new Socio(this.cuadroApellido, this.cuadroNombre, this.cuadroDni, this.cuadroFechaNac, this.cuadroFechaIns, cuota, this.cuadroDomicilio, this.cuadroTelefono, this.cuadroCargo, this.cuadroEstudios, false);
    this.socioService.actualizarSocioServicio(this.indice, miSocio);

    this.router.navigate(['/actualizar', this.indice])
  }


  eliminarPago(i:number){ 
    
    if (confirm("¿Desea Eliminar el Pago?")) {
      let cuota = this.socios[this.indice].cuota;
    cuota.splice(i,1);

    let miSocio= new Socio(this.cuadroApellido, this.cuadroNombre, this.cuadroDni, this.cuadroFechaNac, this.cuadroFechaIns, cuota, this.cuadroDomicilio, this.cuadroTelefono, this.cuadroCargo, this.cuadroEstudios,false);
    this.socioService.actualizarSocioServicio(this.indice, miSocio);

    this.router.navigate(['/actualizar', this.indice])

    } else {
      
    }

    
  }


}
