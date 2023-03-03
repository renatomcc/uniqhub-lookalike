import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import {faWindowClose, faFolderOpen} from '@fortawesome/free-regular-svg-icons'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass'],
})
export class NavbarComponent {
  mobile = true;
  menuClose = faWindowClose;
  menuOpen = faFolderOpen;
  
  handleMenu(): void {
    this.mobile = !this.mobile;
  }
  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.mobile = false;
      }
    });
  }
}
