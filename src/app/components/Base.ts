import { DOCUMENT } from '@angular/common';
import { Renderer2, ElementRef, Inject } from '@angular/core';
import { Subscription } from 'rxjs';
import { StyleService } from '../services/style.service';
import { UiService } from '../services/ui.service';

export class Base {
  showMenu: boolean = false;
  subscription!: Subscription;
  dim!: boolean;
  isDarkMode!: boolean;
  themeSubscription!: Subscription;
  constructor(
    protected uiService: UiService,
    protected renderer: Renderer2,
    protected styleService: StyleService,
    protected elementRef: ElementRef,
    @Inject(DOCUMENT) protected document: Document
  ) {
    this.subscription = this.uiService.onToggleMenu().subscribe((value) => {
      this.showMenu = value;
      this.dim = value;
    });
  }

  setHeight(
    service: any,
    elementRef: any,
    className: any,
    renderer: any
  ): void {
    service.getHeaderHeight().subscribe((headerHeight: any) => {
      const section = elementRef.nativeElement.querySelector(`${className}`);
      const marginTopValue =
        className === '.sec-1' ? `${headerHeight + 40}px` : `${headerHeight}px`;
      if (section) {
        renderer.setStyle(section, 'margin-top', marginTopValue);
      }
    });
  }

  setTheme() {
    this.uiService.changeTheme();
    console.log('set theme');
    this.uiService.isDarkMode$.subscribe((isDarkMode) => {
      if (isDarkMode) {
        this.renderer.addClass(this.document.body, 'dark');
        this.renderer.addClass(this.document.body.querySelector('img'), 'dark');
      } else {
        this.renderer.removeClass(this.document.body, 'dark');
        this.renderer.addClass(this.document.body.querySelector('img'), 'dark');
      }
    });
  }

  setToggle() {
    this.showMenu = !this.showMenu;
    this.uiService.toggleMenu();
    if (this.dim) {
      this.renderer.setStyle(this.document.body, 'overflow-y', 'hidden');
    } else {
      this.renderer.setStyle(this.document.body, 'overflow-y', 'visible');
    }
  }
}
