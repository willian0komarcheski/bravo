import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { login } from 'src/app/Models/login';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit{
 
  btnacao: string = "editar!"
  btntitulo: string = "editar login!"
  login! : login;

  constructor(private loginService : LoginService, private route : ActivatedRoute) {}

  ngOnInit(): void {
      const id = Number(this.route.snapshot.paramMap.get('id'));

      this.loginService.Getloginid(id).subscribe((data) => {
        this.login = data;
        console.log(this.login);
        
      })
  }
}
