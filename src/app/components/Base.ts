import { DOCUMENT } from '@angular/common';
import { Renderer2, ElementRef, Inject } from '@angular/core';
import { Subscription } from 'rxjs';
import { StyleService } from '../services/style.service';
import { UiService } from '../services/ui.service';

export class Base {
  showMenu!: boolean;
  subscription!: Subscription;
  dim!: boolean;

  constructor(
    protected uiService: UiService,
    protected renderer: Renderer2,
    protected styleService: StyleService,
    protected elementRef: ElementRef,
    @Inject(DOCUMENT) protected document: Document
  ) {}

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
}
