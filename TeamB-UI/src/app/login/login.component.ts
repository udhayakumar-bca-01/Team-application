import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { AuthService } from '../_services/auth.service';
import { DataService } from '../apply-attendance/data.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm!: UntypedFormGroup
  errorMessage: string = '';
  submitted = false;
  password = '';
  loggedName: string = '';
  constructor(public fb: UntypedFormBuilder, private auth: AuthService, private data: DataService) {

  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      'email': ['', [Validators.required, Validators.email]],
      'password': ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  newMessage() {
    this.data.shareUsername(this.loggedName)
  }
  onSubmit(form: any) {

    this.submitted = true;
    this.auth.loginmethod(form.value).subscribe({
      next: data => {
        console.log(data, 'data')
        let userMail = data['email']
        this.loggedName = userMail.split('@')[0]
        let idToken = data['idToken']
        console.log(userMail);
        console.log(this.loggedName)
        // let x = data['email'];

        // this.data.shareUsername(userName)
        this.auth.setTokenMethod(data.idToken)
        this.auth.canAuthenticated();
        this.newMessage();
      },
      error: data => {
        this.errorMessage = data.error.error.message;
        console.log(this.errorMessage, 'wrong Pass');

      }
    })
    // this.password='';

  }
}
