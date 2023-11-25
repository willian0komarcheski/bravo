import { Component, OnInit } from '@angular/core';
import { login } from 'src/app/Models/login';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  logins : login[] = [];
  loginsGeral: login[] = [];

  constructor(private loginService : LoginService) { }

  ngOnInit(): void {
    this.loginService.Getlogin().subscribe((login) => {
      this.logins = login;
      this.loginsGeral = login;
      },
    )
  }


  search(event : Event){
    const target = event.target as HTMLInputElement;
    const value = target.value.toLowerCase();

    this.logins = this.loginsGeral.filter(login => {
      return login.usarname?.toLocaleLowerCase().includes(value);
    })
  }
}
