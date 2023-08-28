import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-componente-contactos',
  templateUrl: './componente-contactos.component.html',
  styleUrls: ['./componente-contactos.component.css']
})
export class ComponenteContactosComponent {

  constructor(private router:Router) {}

  ngOnInit(): void{

  }

  volverInicio(){

    this.router.navigate(['']);
  }

}
