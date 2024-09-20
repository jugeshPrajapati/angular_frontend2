import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AuthService } from '../../services/auth.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    MatTooltipModule,
    RouterLink,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  // authService: AuthService = inject(AuthService);
  router: Router = inject(Router);
  activeRoute: ActivatedRoute = inject(ActivatedRoute);
  islogged!: boolean;

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.authService.loggedIn.subscribe((isLoggedIn) => {
      this.islogged = isLoggedIn;
    });
    console.log(this.islogged);
  }
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
    this.activeRoute.queryParamMap.subscribe((query) => {
      const logout = Boolean(query.get('logout'));
      if (logout) {
        this.authService.logout();
        alert(`you have been logout. Islogged: ${this.islogged}`);
      }
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const user = this.authService.login(
        this.loginForm.value.email,
        this.loginForm.value.password
      );
      if (user === undefined) {
        alert('the login credential is invalid');
      } else {
        alert(`welcome back ${user.name}`);
        this.router.navigate(['/home']);
      }
      console.log('Login works', this.loginForm.value);
      // Handle login logic here, e.g., call an authentication service
    } else {
      console.log('Form is invalid');
    }
  }
}
