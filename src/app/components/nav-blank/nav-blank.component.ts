import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: "app-nav-blank",
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: "./nav-blank.component.html",
  styleUrl: "./nav-blank.component.css",
})
export class NavBlankComponent {
  logOut() {
    console.log("hoiii");
  }
}
