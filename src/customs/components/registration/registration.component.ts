import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss',
})
export class RegistrationComponent {
  user = {
    username: '',
    email: '',
    password: '',
  };
  @ViewChild('registrationForm') form!: NgForm;
  onSubmit() {
    if (this.form.valid) {
      alert('form submitted');
      console.log('Form Submitted!', this.form.value);
      this.form.reset();
    }
  }
}
