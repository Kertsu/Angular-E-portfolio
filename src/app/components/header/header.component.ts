import { Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StyleService } from 'src/app/services/style.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  routes!: any;

  constructor(
    private router: Router,
    protected elementRef: ElementRef,
    private styleService: StyleService
  ) {
    this.routes = [
      { routerLink: '/', title: 'Home' },
      { routerLink: '/education', title: 'Education' },
      { routerLink: '/awards-and-honors', title: 'Awards' },
      { routerLink: '/friends', title: 'Friends' },
      { routerLink: '/interests', title: 'Interests' },
    ];
  }

  ngOnInit(): void {
    const headerHeight =
      this.elementRef.nativeElement.querySelector('.header').clientHeight;
    this.styleService.setHeaderHeight(headerHeight);
  }

  isActive(routeLink: string): boolean {
    // Get the current URL
    const currentUrl = this.router.routerState.snapshot.url;

    // Check if the current URL matches the provided routeLink
    return currentUrl === routeLink;
  }
}
