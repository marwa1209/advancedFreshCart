import { Component, inject } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  private _AuthService=inject(AuthService)
  ngOnInit() {
    this._AuthService.decodeUser();
    console.log(this._AuthService.userInfo);
  }
}
