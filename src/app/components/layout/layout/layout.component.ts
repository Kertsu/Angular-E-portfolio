import { Component, ElementRef, Inject, Renderer2 } from '@angular/core';
import { Base } from '../../Base';
import { DOCUMENT } from '@angular/common';
import { StyleService } from 'src/app/services/style.service';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent extends Base {
  constructor(
    protected override uiService: UiService,
    protected override renderer: Renderer2,
    protected override styleService: StyleService,
    protected override elementRef: ElementRef,
    @Inject(DOCUMENT) protected override document: Document
  ){
    super(uiService, renderer, styleService, elementRef, document);

  }
}
