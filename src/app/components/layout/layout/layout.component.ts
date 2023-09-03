import { Component, ElementRef, Inject, Renderer2, OnInit } from '@angular/core';
import { Base } from '../../Base';
import { DOCUMENT } from '@angular/common';
import { StyleService } from 'src/app/services/style.service';
import { UiService } from 'src/app/services/ui.service';
import { NavigationEnd, Router } from '@angular/router';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout'

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent extends Base implements OnInit{
  constructor(
    protected override uiService: UiService,
    protected override renderer: Renderer2,
    protected override styleService: StyleService,
    protected override elementRef: ElementRef,
    @Inject(DOCUMENT) protected override document: Document,
    private router: Router,
    private breakpointObserver: BreakpointObserver
  ){
    super(uiService, renderer, styleService, elementRef, document);

  }
  ngOnInit(): void {
    

    this.breakpointObserver.observe('(max-width:991px)').subscribe((state)=>{
      if (state.matches){
      this.router.events.subscribe((event)=>{
      if (event instanceof NavigationEnd){
            this.setToggle()
          }
        })
      }
    })
    
  }
  
}
