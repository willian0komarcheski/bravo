import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { login } from '../Models/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiUrl = `${environment.ApiUrl}logins`
  constructor(private http : HttpClient) { }

  Getlogin() : Observable<login[]> {
    return this.http.get<login[]>(this.apiUrl);
  }

  Getloginid(id : number) : Observable<login> {
    return this.http.get<login>(`${this.apiUrl}/${id}`);
  }

  Createlogin(login : login) : Observable<login[]> {
    return this.http.post<login[]>(`${this.apiUrl}`, login);
  }
}
