import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuemSomosComponent } from './components/quem-somos/quem-somos.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { SolucoesComponent } from './components/solucoes/solucoes.component';
import { PerguntasFrequentesComponent } from './components/perguntas-frequentes/perguntas-frequentes.component';

const routes: Routes = [
  { path: '', component: QuemSomosComponent },
  { path: 'quem-somos', component: QuemSomosComponent },
  { path: 'solucoes', component: SolucoesComponent },
  { path: 'perguntas-frequentes', component: PerguntasFrequentesComponent },
  { path: 'nossos-clientes', component: ClientesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
