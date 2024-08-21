import { Component, OnInit } from '@angular/core';
import { NavAuthComponent } from '../nav-auth/nav-auth.component';
import { NavBlankComponent } from '../nav-blank/nav-blank.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [NavAuthComponent, NavBlankComponent, FooterComponent],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.css',
})
export class NotFoundComponent implements OnInit {
  isLoggedIn: boolean = false;
  ngOnInit(): void {
    this.checkLoginStatus();
  }
  checkLoginStatus(): void {
    if (typeof window !== 'undefined' && window.localStorage) {
    if (localStorage.getItem('etoken') != null) {
      this.isLoggedIn = true;
    } else {
      this.isLoggedIn = false;
    }
  }}
}
