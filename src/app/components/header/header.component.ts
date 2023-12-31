import { DOCUMENT } from '@angular/common';
import {
  Component,
  ElementRef,
  OnInit,
  HostListener,
  EventEmitter,
  Output,
  Renderer2,
  Inject,
} from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Observable } from 'rxjs';
import { StyleService } from 'src/app/services/style.service';
import { UiService } from 'src/app/services/ui.service';
import { Base } from '../Base';
import { MobileNavComponent } from '../mobile-nav/mobile-nav.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent extends Base implements OnInit {
  routes!: any;
  isHeaderScrolled: boolean = false;
  isClicked!: Observable<boolean>;
  showCloseButton!: boolean;

  @Output() toggleBallClick = new EventEmitter();
  @Output() btnClick = new EventEmitter();

  constructor(
    private router: Router,
    protected override uiService: UiService,
    protected override renderer: Renderer2,
    protected override styleService: StyleService,
    protected override elementRef: ElementRef,
    @Inject(DOCUMENT) protected override document: Document
  ) {
    super(uiService, renderer, styleService, elementRef, document);
    this.routes = [
      { routerLink: '/home', title: 'Home' },
      { routerLink: '/education', title: 'Education' },
      { routerLink: '/awards-and-honors', title: 'Awards' },
      { routerLink: '/friends', title: 'Friends' },
      { routerLink: '/interests', title: 'Interests' },
    ];

    this.subscription = this.uiService.onToggleMenu().subscribe((value) => {
      this.showCloseButton = value;
    });
  }

  ngOnInit(): void {
    const headerHeight =
      this.elementRef.nativeElement.querySelector('.header').clientHeight;
    this.styleService.setHeaderHeight(headerHeight);

    this.router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        this.renderer.setStyle(this.document.body, 'overflow-y', 'visible');
      }
    });
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
    this.btnClick.emit();
  }

  onChangeTheme() {
    this.toggleBallClick.emit();
  }
}
