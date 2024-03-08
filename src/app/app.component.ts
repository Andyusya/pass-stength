import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'password-checker';

  weak = false;
  medium = false;
  strong = false;

  passwordChange(password: string) {
  	const hasLetters = /[a-zA-Z]/.test(password);
  	const hasDigits = /\d/.test(password);
  	const hasSymbols = /[!@#$%^&*(),.?":{}\|<>\/]/.test(password);

    if (password.length == 0) this.weak = this.medium = this.strong = false;

  	this.weak = password.length > 0 && password.length < 8;
  	if (this.weak) this.medium = this.strong = false;

  	// != в данном случае выполняет функцию исключаещего или
  	this.medium = (hasLetters && hasSymbols) != (hasLetters && hasDigits) != (hasDigits && hasSymbols) && (password.length >= 8);
  	if (this.medium) this.weak = this.strong = false;

  	this.strong = hasLetters && hasSymbols && hasDigits && (password.length > 8);
  	if (this.strong) this.weak = this.medium = false;
  }
}
