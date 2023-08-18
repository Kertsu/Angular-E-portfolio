import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { DOCUMENT } from '@angular/common';
import {
  Component,
  Inject,
  Input,
  Renderer2,
  HostBinding,
} from '@angular/core';
import {
  Router,
  NavigationStart,
  NavigationEnd,
  ActivatedRoute,
} from '@angular/router';
import { delay } from 'rxjs/operators';
import { UiService } from 'src/app/services/ui.service';
@Component({
  selector: 'app-mobile-nav',
  templateUrl: './mobile-nav.component.html',
  styleUrls: ['./mobile-nav.component.css'],
  animations: [
    trigger('sidebarState', [
      state(
        'hidden',
        style({
          width: '0',
          opacity: '0',
        })
      ),
      state(
        'visible',
        style({
          width: '220px',
          opacity: '1',
        })
      ),
      transition('hidden <=> visible', animate('500ms ease-out')),
    ]),
  ],
})
export class MobileNavComponent {
  routes: any;
  isClosing: boolean = false;

  @HostBinding('sidebarState') @Input() showMenu!: boolean;

  constructor(
    private router: Router,
    protected uiService: UiService,
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document,
    private route: ActivatedRoute
  ) {
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

  clickedA() {
    this.uiService.toggleMenu();
    this.renderer.setStyle(this.document.body, 'overflow-y', 'visible');
  }

  clickedLi(event: Event) {
    this.uiService.toggleMenu();
    this.renderer.setStyle(this.document.body, 'overflow-y', 'visible');

    event.stopPropagation();
  }

  onChangeTheme() {
    this.uiService.changeTheme();
  }
}
