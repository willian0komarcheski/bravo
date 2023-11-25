import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login//loginhome/login.component';
import { CadastroComponent } from './pages/login/cadastro/cadastro.component';
import { EditarComponent } from './pages/login/editar/editar.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  {path: 'cadastro', component: CadastroComponent},
  {path: 'editar/:loginId', component: EditarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
