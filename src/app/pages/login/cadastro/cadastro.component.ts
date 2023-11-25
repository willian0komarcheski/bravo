import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { login } from 'src/app/Models/login';
import { LoginService } from 'src/app/services/login.service';
import { LoginFormComponent } from 'src/app/componentes/login-form/login-form.component';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {

  btnacao = "cadastrar!";
  btntitulo = "cadastrar login";

  constructor(private loginService : LoginService, private router : Router) {

  }

  createlogin(login : login) {
    this.loginService.Createlogin(login).subscribe((data) => {
      this.router.navigate(['/']);
    });
  }
}
