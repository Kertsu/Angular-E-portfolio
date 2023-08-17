import {
  Component,
  Renderer2,
  ElementRef,
  AfterViewInit,
  Inject,
} from '@angular/core';
import { StyleService } from 'src/app/services/style.service';
import { UiService } from 'src/app/services/ui.service';
import { Base } from '../Base';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent extends Base implements AfterViewInit {
  progLangs!: any;
  blueSectionData!: any;
  information!: any;
  services!: any;

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit executed');
    this.setHeight(this.styleService, this.elementRef, '.sec-1', this.renderer);
  }

  constructor(
    protected override uiService: UiService,
    protected override renderer: Renderer2,
    protected override styleService: StyleService,
    protected override elementRef: ElementRef,
    @Inject(DOCUMENT) protected override document: Document
  ) {
    super(uiService, renderer, styleService, elementRef, document);
    this.progLangs = [
      {
        title: 'HTML',
        progress: '45',
      },
      {
        title: 'CSS',
        progress: '50',
      },
      {
        title: 'JAVASCRIPT',
        progress: '40',
      },
      {
        title: 'TYPESCRIPT',
        progress: '37',
      },
      {
        title: 'PYTHON',
        progress: '28',
      },
      {
        title: 'PHP',
        progress: '25',
      },
    ];

    this.blueSectionData = [
      { icon: 'fa-solid fa-mug-saucer', count: '243', caption: 'CUPS OF MILK' },
      {
        icon: 'fa-solid fa-skull-crossbones',
        count: '6123',
        caption: 'OPPONENTS DESTROYED',
      },
      { icon: 'fa-solid fa-gamepad', count: '10251', caption: 'GAMES PLAYED' },
    ];

    this.information = [
      { title: 'Name:', value: 'Kurtd Daniel Bigtas' },
      { title: 'Date of Birth:', value: 'XXVII' },
      { title: 'Address:', value: 'Tokyo Jujutsu High' },
      { title: 'Zip Code:', value: '0000' },
      { title: 'Email:', value: 'kurtddbigtas@gmail.com' },
      { title: 'Phone:', value: '-----------' },
    ];

    this.services = [
      {
        icon: 'fa-solid fa-crop',
        title: 'Web Design',
        caption:
          'Do you aspire to greater success? Develop a passion for growth and learning. The harder you work at honing your abilities, the more you will learn.',
      },
      {
        icon: 'fa-solid fa-laptop',
        title: 'Web Development',
        caption:
          'Distractions and other things prevent me from finding bugs. However, bugs are not my only challenge. Distractions + other things + bugs = magic',
      },
      {
        icon: 'fa-solid fa-code',
        title: 'Web Application',
        caption:
          'When I write code, I create bugs; when I delete code, I also create bugs. But in this course, not writing code is a sin.',
      },
      {
        icon: 'fa-solid fa-chalkboard-user',
        title: 'Tutorials',
        caption:
          'Learning is not the only thing here. If you can — teach. Share your knowledge.',
      },
      {
        icon: 'fa-solid fa-computer',
        title: 'System Analysis',
        caption:
          'Systems analysts serve as the architects of efficiency, transforming complex challenges into streamlined solutions.',
      },
      {
        icon: 'fa-solid fa-user-check',
        title: 'Quality Assurance',
        caption:
          'We prefer quality over quantity; it depends on the case, though.',
      },
    ];

    this.subscription = this.uiService.onToggleMenu().subscribe((value) => {
      this.showMenu = value;
      this.dim = value;
      console.log(this.showMenu);
      console.log(this.dim);
    });
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
