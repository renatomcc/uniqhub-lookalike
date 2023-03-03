import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { QuemSomosComponent } from './components/quem-somos/quem-somos.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SolucoesComponent } from './components/solucoes/solucoes.component';
import { PerguntasFrequentesComponent } from './components/perguntas-frequentes/perguntas-frequentes.component';
import { ScrollButtonComponent } from './components/scroll-button/scroll-button.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    QuemSomosComponent,
    ClientesComponent,
    SolucoesComponent,
    PerguntasFrequentesComponent,
    ScrollButtonComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
