import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { SocioService } from './socio.service';
import { ComponenteSociosComponent } from './componente-socios/componente-socios.component';
import { RouterModule, Routes } from '@angular/router';
import { ComponenteContactosComponent } from './componente-contactos/componente-contactos.component';
import { ComponenteInicioComponent } from './componente-inicio/componente-inicio.component';
import { ComponenteActualizarComponent } from './componente-actualizar/componente-actualizar.component';
import { ComponenteErrorComponent } from './componente-error/componente-error.component';
import { DataService } from './data.services';
import { HttpClientModule} from '@angular/common/http';
import { ComponenteAgregarComponent } from './componente-agregar/componente-agregar.component'
import { FilterPipe } from './pipes/filter.pipe';
import { MatTableModule } from '@angular/material/table';
import { MatTableExporterModule } from 'mat-table-exporter';
import { FiltroPipe } from './pipes/filtro.pipe';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login/login.service';
import { CookieService } from 'ngx-cookie-service';
import { LoginGuardian } from './login/login-guardian';
import { ContableComponent } from './contable/contable.component';
import { CajaService } from './caja.service';

const appRoutes: Routes=[

  {path:'', component: ComponenteInicioComponent},
  {path:'socios', component: ComponenteSociosComponent, canActivate:[LoginGuardian]},
  {path:'contacto', component: ComponenteContactosComponent},
  {path:'actualizar/:id', component: ComponenteActualizarComponent},
  {path:'agregar', component: ComponenteAgregarComponent},
  {path:'login', component: LoginComponent},
  {path: 'contable', component: ContableComponent, canActivate:[LoginGuardian]},
  {path:'**', component:ComponenteErrorComponent}
  

]
@NgModule({
  declarations: [
    AppComponent,
    ComponenteInicioComponent,
    ComponenteSociosComponent,
    ComponenteContactosComponent,
    ComponenteActualizarComponent,
    ComponenteAgregarComponent,  
    FilterPipe, 
    FiltroPipe, 
    LoginComponent, 
    ContableComponent, 
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,    
    MatTableModule,
    MatTableExporterModule    
  ],
  providers: [SocioService, DataService, LoginService, CookieService, LoginGuardian, CajaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
