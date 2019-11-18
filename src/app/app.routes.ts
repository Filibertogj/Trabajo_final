import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent  } from './components/Labs/Labs.component';
import { UsersComponent  } from './components/users/users.component';
import { CrearComponent  } from './components/users/crear/crear.component';
import { EliminarComponent  } from './components/users/eliminar/eliminar.component';
import { ListarComponent  } from './components/users/listar/listar.component';
import { ConsultarComponent  } from './components/users/consultar/consultar.component';
import { AprobaciondenegacionComponent  } from './components/labs/aprobaciondenegacion/aprobaciondenegacion.component';
import { CalendariolaboratorioComponent  } from './components/labs/calendariolaboratorio/calendariolaboratorio.component';
import { ListarsolicitudesComponent  } from './components/labs/listarsolicitudes/listarsolicitudes.component';
import { SolicitarsalaComponent  } from './components/labs/solicitarsala/solicitarsala.component';
import { ListarsolicitudespropiasComponent  } from './components/labs/listarsolicitudespropias/listarsolicitudespropias.component';
import { CrearfblComponent  } from './components/university/crearfbl/crearfbl.component';
import { EliminarfblComponent  } from './components/university/eliminarfbl/eliminarfbl.component';
import { ListarfblComponent  } from './components/university/listarfbl/listarfbl.component';
import { ConsultarfblComponent  } from './components/university/consultarfbl/consultarfbl.component';
import { AuthGuard } from './auth.guard';



const APP_ROUTES: Routes = [
    { path: 'LOGIN', component: HomeComponent},
    { path: 'UNIVERSITY', component: AboutComponent , canActivate: [AuthGuard] },
    { path: 'LABS', component: HeroesComponent , canActivate: [AuthGuard] },
    { path: 'USERS', component: UsersComponent ,canActivate: [AuthGuard] },
    { path: 'CrearUsuarios', component: CrearComponent ,canActivate: [AuthGuard] },
    { path: 'EliminarUsuarios', component: EliminarComponent, canActivate: [AuthGuard] },
    { path: 'ListarUsuarios', component: ListarComponent ,canActivate: [AuthGuard]  },
    { path: 'ConsultarUsuarios', component: ConsultarComponent , canActivate: [AuthGuard] },
    { path: 'Aprobaciondenegacion', component: AprobaciondenegacionComponent ,canActivate: [AuthGuard] },
    { path: 'Calendariolaboratorio', component: CalendariolaboratorioComponent, canActivate: [AuthGuard] },
    { path: 'Listarsolicitudes', component: ListarsolicitudesComponent ,canActivate: [AuthGuard] },
    { path: 'Listarsolicitudespropias', component: ListarsolicitudespropiasComponent , canActivate: [AuthGuard] },
    { path: 'ConsultarUsuarios', component: ConsultarComponent, canActivate: [AuthGuard] },
    { path: 'Solicitarsala', component: SolicitarsalaComponent, canActivate: [AuthGuard] },
    { path: 'Crearfbl', component: CrearfblComponent, canActivate: [AuthGuard] },
    { path: 'Eliminarfbl', component: EliminarfblComponent, canActivate: [AuthGuard] },
    { path: 'Listarfbl', component: ListarfblComponent, canActivate: [AuthGuard] },
    { path: 'Consultarfbl', component: ConsultarfblComponent, canActivate: [AuthGuard] },
    { path: '**', pathMatch: 'full', redirectTo: 'HOME'}
]

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
