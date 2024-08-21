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

  ngOnInit(): void {
    this.checkLoginStatus();
  }
  isLoggedIn: boolean = true;
  checkLoginStatus(): void {


  }
}
