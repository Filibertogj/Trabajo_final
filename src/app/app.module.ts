import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Rutas

import {APP_ROUTING} from './app.routes';


//Servicios



//Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/Labs/Labs.component';
import { UsersComponent } from './components/users/users.component';
import { FooterComponent } from './components/footer/footer.component';
import { CrearComponent } from './components/users/crear/crear.component';
import { ConsultarComponent } from './components/users/consultar/consultar.component';
import { ListarComponent } from './components/users/listar/listar.component';
import { EliminarComponent } from './components/users/eliminar/eliminar.component';
import { SolicitarsalaComponent } from './components/labs/solicitarsala/solicitarsala.component';
import { ListarsolicitudesComponent } from './components/labs/listarsolicitudes/listarsolicitudes.component';
import { ListarsolicitudespropiasComponent } from './components/labs/listarsolicitudespropias/listarsolicitudespropias.component';
import { AprobaciondenegacionComponent } from './components/labs/aprobaciondenegacion/aprobaciondenegacion.component';
import { CalendariolaboratorioComponent } from './components/labs/calendariolaboratorio/calendariolaboratorio.component';
import { CrearfblComponent } from './components/university/crearfbl/crearfbl.component';
import { ConsultarfblComponent } from './components/university/consultarfbl/consultarfbl.component';
import { ListarfblComponent } from './components/university/listarfbl/listarfbl.component';
import { EliminarfblComponent } from './components/university/eliminarfbl/eliminarfbl.component';
import { LoginComponent } from './components/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule} from '@angular/forms'
 
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    HeroesComponent,
    UsersComponent,
    FooterComponent,
    CrearComponent,
    ConsultarComponent,
    ListarComponent,
    EliminarComponent,
    SolicitarsalaComponent,
    ListarsolicitudesComponent,
    ListarsolicitudespropiasComponent,
    AprobaciondenegacionComponent,
    CalendariolaboratorioComponent,
    CrearfblComponent,
    ConsultarfblComponent,
    ListarfblComponent,
    EliminarfblComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
