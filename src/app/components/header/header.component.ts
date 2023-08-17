import {
  Component,
  ElementRef,
  OnInit,
  HostListener,
  EventEmitter,
  Output,
} from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { StyleService } from 'src/app/services/style.service';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  routes!: any;
  isHeaderScrolled: boolean = false;
  isClicked!: Observable<boolean>;
  @Output() data = new EventEmitter();
  constructor(
    private router: Router,
    protected elementRef: ElementRef,
    private styleService: StyleService,
    private uiService: UiService
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

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollY = window.scrollY || document.documentElement.scrollTop;

    const threshold = 30;

    this.isHeaderScrolled = scrollY > threshold ? true : false;
  }

  isActive(routeLink: string): boolean {
    // Get the current URL
    const currentUrl = this.router.routerState.snapshot.url;

    // Check if the current URL matches the provided routeLink
    return currentUrl === routeLink;
  }

  onToggle() {
    this.uiService.toggleMenu();
    this.data.emit(this.uiService.getIsToggled());
  }
}
