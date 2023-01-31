import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDxEnKCcVIm6gAiSTeZpr2l3gnx8s5qmlM'
  loginurl = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDxEnKCcVIm6gAiSTeZpr2l3gnx8s5qmlM'
  constructor(private route: Router, private http: HttpClient) { }
  isAuthenticated(): boolean {
    if (sessionStorage.getItem('token') !== null) {
      return true
    }
    return false
  }
  canAccess() {
    if (!this.isAuthenticated()) {
      this.route.navigate(['/login'])
    }
  }

  canAuthenticated() {
    if (this.isAuthenticated()) {
      this.route.navigate(['/dashboard'])
    }
  }

  registerMethod(form: any) {
    debugger
    return this.http.
      post<{ idToken: string }>(this.url, form)
  }

  setTokenMethod(token: any) {
    sessionStorage.setItem('token', token)
  }

  loginmethod(form: any) {
    return this.http.post<{
      [x: string]: any; idToken: string
    }>(this.loginurl, form)
  }
}
