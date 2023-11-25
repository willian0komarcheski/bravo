import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators ,FormGroup } from '@angular/forms';
import { login } from 'src/app/Models/login';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  
  @Output() onsubmit = new EventEmitter<login>();
  @Input() btnacao!: string;
  @Input() btntitulo!: string;
  @Input() dadoslogin : login | null = null;

  loginform! : FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.loginform = this.fb.group({
      loginId: [0],
      usarname: ['', Validators.required],
      password: ['', Validators.required]
    })
    
  }

  submit() {
    this.onsubmit.emit(this.loginform.value);
  }
}
