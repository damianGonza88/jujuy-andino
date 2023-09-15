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
  mes: number = new Date().getMonth()+1;
  anio: number = new Date().getFullYear();
  hoy: string = new Date().toDateString();
  inicioDeMes: string ="";
      

  fechaComparacion: string = ""; //mm-dd-aaaa
  fechaComparacionEstudios: string = ""; //mm-dd-aaaa
  fechaComparacionEstudiosAtrasados = ""; //mm-dd-aaaa
  finMesPasado="";
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


      //DATOS A MOSTRAR EN TABLA
      this.dataSource = this.socios;

      // if (this.mes == 0) {
      //   this.mes = 12; 
      // } 
      
      //FECHA DE VENCIMIENTO CUOTA
      this.fechaComparacion= ((this.mes).toString())+"-10-"+this.anio; //mm-dd-aaaa

      //FECHA DE VENCIMIENTO ESTUDIOS
      this.fechaComparacionEstudios= "04-01-"+ this.anio; //mm-dd-aaaa

      //FECHA DE VENCIMIENTO ESTUDIOS ATRASADOS
      this.fechaComparacionEstudiosAtrasados = "12-31-"+ (this.anio-1); //mm-dd-aaaa

      //FIN DE MES PASADO
      this.finMesPasado = (this.mes-1) +"-01-"+this.anio; //mm-dd-aaaa
      console.log("Hoy: "+this.hoy);

      //INICIO DE MES
      this.inicioDeMes = this.mes +"-01-"+ this.anio; //mm-dd-aaaa
      console.log("Inicio de Mes: "+ this.inicioDeMes);

    });    
  } 

  displayedColumns: string[] = ['check','position', 'apellido', 'nombres', 'dni', 'fechaNac', 'edad', 'domicilio', 'telefono', 'fechaIns','antiguedad', 'cuota', 'estudios' ,'editar'];
     
  buscaApellido(){

    let sociosB = this.socios.filter(e=>e.apellido.toUpperCase().includes(this.buscarApellido.toLocaleUpperCase())    
    )
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


}