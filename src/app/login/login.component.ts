import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl, FormBuilder} from  '@angular/forms';
import { AuthService } from './../auth.service';

interface data {
  email : string;
  password : string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private auth: AuthService) { }


  login(){
    console.log('Login: ');
    this.auth.login();
  }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', Validators.email],
      password: ['', Validators.required]
    })
  }

}
