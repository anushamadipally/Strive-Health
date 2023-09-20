import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApisService } from '../apis.service';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit  {
  hide = true;


  formData: { username: string, password: string } = { username: '', password: '' };

  constructor(private http: HttpClient, private router:Router) {}
  ngOnInit(): void {
   
  }

  login() {
    const url = 'http://165.22.209.57:8500/api/dashboard/admin';
    const headers = new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      // "token": "273|2i8cZsFfKteEupsV1hJO409UvqZzlZqRRjdbYlXW3759665f",
    });

    const body = {
      username: this.formData.username,
      password: this.formData.password
    };


this.http.post(url, body, { headers }).subscribe(
  (response: any) => {
    console.log('Response:', response);
    if (response.status === true) {
      // Store the token in session storage
      sessionStorage.setItem('token', response.data[0].token);
      this.router.navigate(['sidenav'])
      alert('Login successful!');
    } else {
      alert('Login failed. Please check your credentials.');
    }
  },
  (error: any) => {
    console.error('Error:', error);
    if (error.status === 401) {
      this.router.navigate(['sidenav'])
    } else {
      alert(error.message)
    }
  }
  
);


  }

  
  
  }

