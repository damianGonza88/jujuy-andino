import { Component, OnInit } from '@angular/core';
import { Socio } from '../socio.model';
import { SocioService } from '../socio.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-componente-socios',
  templateUrl: './componente-socios.component.html',
  styleUrls: ['./componente-socios.component.css'],
})

export class ComponenteSociosComponent implements OnInit{
  titulo = 'Jujuy Andino';
  filterPost="";
  buscarApellido='';
  mes: number = new Date().getMonth();
    

  fechaComparacion: string = ""; //mm-dd-aaaa
  checkboxcabecera: boolean=false;

  socios:Socio[]=[];
  dataSource: Socio[]=[];

  constructor(private socioService: SocioService, private router:Router){
    //this.socios = this.socioService.socios;
  }

  ngOnInit(): void {  

    this.socioService.obtenerSocios().subscribe(misSocios=>{
      this.socios = Object.values(misSocios);
      this.socioService.setSocios(this.socios); 
      this.dataSource = this.socios;
      if (this.mes == 0) {
        this.mes = 12; 
      } 
      //FECHA DE VENCIMIENTO
      this.fechaComparacion= this.mes.toString()+"-30"+"-2023"; //mm-dd-aaaa
    });

    
  } 

  displayedColumns: string[] = ['check','position', 'apellido', 'nombres', 'dni', 'fechaNac', 'edad', 'domicilio', 'telefono', 'fechaIns','cargo', 'cuota', 'estudios' ,'editar'];
   
  
  buscaApellido(){

    alert("buscando");

    let sociosB = this.socios.filter(e=>e.apellido.toUpperCase().includes(this.buscarApellido.toLocaleUpperCase())    
    )
    console.log(sociosB);
    this.dataSource = sociosB;
  }

  calcularEdad(fecha:string){

    const convertAge = new Date(fecha);
    const timeDiff = Math.abs(Date.now() - convertAge.getTime());
    const edad = Math.floor((timeDiff / (1000 * 3600 * 24))/365);

    return edad;
  } 
  
  // checkAll(event: boolean){    
  //   this.socios.forEach(element => element.checked = event);
  // }

  checkAll(){ 
    if (this.checkboxcabecera) {
      console.log(this.checkboxcabecera);
      this.socios.forEach(element => element.checked = true);
    } else {
      this.socios.forEach(element => element.checked = false);
    }  
    
  }

  parseFecha(date: string){
    return Date.parse(date);
  }

  volverInicio(){
    this.router.navigate(['']);
  }

  estudios(estudio:boolean){
    if (estudio) {
      return "SI";
    } else {
      return "NO";
    }
  }

}