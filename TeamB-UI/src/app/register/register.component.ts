import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  errorMessage: string = '';
  public registerForm!: UntypedFormGroup

  constructor(private auth: AuthService, private fb: UntypedFormBuilder,private route:Router) {
    this.registerForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', Validators.required],
      password: ['', [Validators.required]]
    })
  }

  ngOnInit(): void {
  }

  onSubmit(form: any) {
    this.auth.registerMethod(form.value).subscribe({
      next: data => {
        this.auth.setTokenMethod(data.idToken)
        this.route.navigate(['/login'])
      },
      error: data => {
        this.errorMessage = data.error.error.message

      }
    })
  }

}
