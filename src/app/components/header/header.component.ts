import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  routes!: any;

  constructor(private router: Router) {
    this.routes = [
      { routerLink: '/', title: 'Home' },
      { routerLink: '/education', title: 'Education' },
      { routerLink: '/awards-and-honors', title: 'Awards' },
      { routerLink: '/friends', title: 'Friends' },
      { routerLink: '/interests', title: 'Interests' },
    ];
  }
  isActive(routeLink: string): boolean {
    // Get the current URL
    const currentUrl = this.router.routerState.snapshot.url;

    // Check if the current URL matches the provided routeLink
    return currentUrl === routeLink;
  }
}
