import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  template: '&nbsp;'
})
export class LoginComponent implements OnInit {
  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.authService.startAuthentication();
  }
}
