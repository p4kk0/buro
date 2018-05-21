import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { HttpModule } from '@angular/http'

import { app_routing }  from './app.routes';

import { HeaderService } from "./services/header.service";

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
// import { InicioComponent } from './components/inicio/inicio.component';
// import { LoginComponent } from './components/login/login.component';
// import { PrincipalComponent } from './components/principal/principal.component';
// import { ArchivosComponent } from './components/monitor/archivos/archivos.component';
// import { TicketsComponent } from './components/monitor/tickets/tickets.component';
// import { UsuariosComponent } from './components/administracion/usuarios/usuarios.component';
// import { BitacoraComponent } from './components/administracion/bitacora/bitacora.component';
// import { ProveedoresComponent } from './components/administracion/proveedores/proveedores.component';
// import { AuditoriaComponent } from './components/administracion/auditoria/auditoria.component';
// import { FaqComponent } from './components/faq/faq.component';

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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    InicioComponent,
    LoginComponent,
    PrincipalComponent,
    MonitorArchivosComponent,
    MonitorTicketsComponent,
    EstadisticosTicketsComponent,
    EstadisticosArchivosComponent,
    UsuariosComponent,
    BitacoraComponent,
    ProveedoresComponent,
    AuditoriaComponent,
    FaqComponent
  ],
  imports: [
    BrowserModule,
    ChartsModule,
    HttpModule,
    app_routing
  ],
  providers: [
    HeaderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
