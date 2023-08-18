import { DOCUMENT } from '@angular/common';
import { Renderer2, ElementRef, Inject } from '@angular/core';
import { Subscription } from 'rxjs';
import { StyleService } from '../services/style.service';
import { UiService } from '../services/ui.service';

export class Base {
  showMenu!: boolean;
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
      console.log(this.showMenu);
      console.log(this.dim);
    });

    this.themeSubscription = this.uiService
      .onChangeTheme()
      .subscribe((value) => {
        this.isDarkMode = value;
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
  }

  setToggle() {
    this.uiService.toggleMenu();
    if (this.dim) {
      this.renderer.setStyle(this.document.body, 'overflow-y', 'hidden');
    } else {
      this.renderer.setStyle(this.document.body, 'overflow-y', 'visible');
    }
  }
}
