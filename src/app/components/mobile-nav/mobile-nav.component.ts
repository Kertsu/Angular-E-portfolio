import { DOCUMENT } from '@angular/common';
import { Component, Inject, Input, Renderer2 } from '@angular/core';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import { UiService } from 'src/app/services/ui.service';
@Component({
  selector: 'app-mobile-nav',
  templateUrl: './mobile-nav.component.html',
  styleUrls: ['./mobile-nav.component.css'],
})
export class MobileNavComponent {
  routes: any;
  isClosing: boolean = false;
  @Input() showMenu!: boolean;

  constructor(
    private router: Router,
    private uiService: UiService,
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document
  ) {
    this.routes = [
      { routerLink: '/', title: 'Home' },
      { routerLink: '/education', title: 'Education' },
      { routerLink: '/awards-and-honors', title: 'Awards' },
      { routerLink: '/friends', title: 'Friends' },
      { routerLink: '/interests', title: 'Interests' },
    ];

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        console.log('start', event);
        this.isClosing = true;
      } else if (event instanceof NavigationEnd) {
        console.log('end', NavigationEnd);
        // Delay the reset of isClosing to allow animation to complete
        setTimeout(() => {
          this.isClosing = false;
        }, 300);
      }
    });
  }
  isActive(routeLink: string): boolean {
    // Get the current URL
    const currentUrl = this.router.routerState.snapshot.url;

    // Check if the current URL matches the provided routeLink
    return currentUrl === routeLink;
  }

  clickedA() {
    this.uiService.toggleMenu();
    this.renderer.setStyle(this.document.body, 'overflow-y', 'visible');
  }
  clickedLi(event: Event) {
    this.uiService.toggleMenu();
    this.renderer.setStyle(this.document.body, 'overflow-y', 'visible');

    event.stopPropagation();
  }
}
