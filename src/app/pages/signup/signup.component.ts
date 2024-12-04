import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  email: string = '';
  password: string = '';
  confirmPassword: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  async signup() {
    if (this.password !== this.confirmPassword) {
      alert('Password and Confirm Password do not match');
      return;
    }

    try {
      await this.authService.signUp(this.email, this.password);
      alert('Signup successful');
      this.router.navigate(['/login']); // Redirect ke halaman login setelah signup berhasil
    } catch (error: any) {
      alert('Signup failed: ' + error.message);
    }
  }
}
