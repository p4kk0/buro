import { RouterModule, Routes } from '@angular/router';
import {
  InicioComponent,
  LoginComponent,
  FaqComponent,
  PrincipalComponent,
  UsuariosComponent,
  AuditoriaComponent,
  BitacoraComponent,
  ProveedoresComponent,
  MonitorArchivosComponent,
  MonitorTicketsComponent,
  EstadisticosTicketsComponent,
  EstadisticosArchivosComponent
} from './components/index.pages';

const app_routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'login', component: LoginComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'principal', component: PrincipalComponent },
  { path: 'administracion/usuarios', component: UsuariosComponent },
  { path: 'administracion/bitacora', component: BitacoraComponent },
  { path: 'administracion/auditoria', component: AuditoriaComponent },
  { path: 'administracion/proveedores', component: ProveedoresComponent },
  { path: 'monitor/archivos', component: MonitorArchivosComponent },
  { path: 'monitor/tickets', component: MonitorTicketsComponent },
  { path: 'estadisticos/archivos', component: EstadisticosArchivosComponent },
  { path: 'estadisticos/tickets', component: EstadisticosTicketsComponent },
  { path: '', pathMatch: 'full', redirectTo: 'principal' }
];

export const app_routing = RouterModule.forRoot(app_routes, { useHash:true});
