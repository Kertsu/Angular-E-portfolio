import { Component, ElementRef, Renderer2, AfterViewInit } from '@angular/core';
import { StyleService } from 'src/app/services/style.service';
import { Base } from '../base/base';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
})
export class EducationComponent extends Base implements AfterViewInit {
  bannerData: any;
  information: any;
  blueSectionData: any;
  testimoniesData: any;

  ngAfterViewInit(): void {
    this.setHeight(
      this.styleService,
      this.elementRef,
      '.educ-sec-1',
      this.renderer
    );
  }

  constructor(
    private renderer: Renderer2,
    private styleService: StyleService,
    private elementRef: ElementRef
  ) {
    super();
    this.bannerData = {
      class: 'educ',
      title: 'Education.',
      caption:
        'Whom have locked success, and why has education become the only key to it?',
      author: '-k.d.',
    };

    this.information = [
      {
        img: 'elem.jpg',
        title: 'Manuel S. Rojas Elementary School',
        caption:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore commodi unde aut totam error autem ipsa perspiciatis facere soluta ad!',
      },
      {
        img: 'g10.jpg',
        title: 'Cavite National High School',
        caption:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore commodi unde aut totam error autem ipsa perspiciatis facere soluta ad!',
      },
      {
        img: 'g11.jpg',
        title: 'Cavite National High School — Senior High School',
        caption:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore commodi unde aut totam error autem ipsa perspiciatis facere soluta ad!',
      },
      {
        img: 'act2.jpg',
        title: 'La Verdad Christian College',
        caption:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore commodi unde aut totam error autem ipsa perspiciatis facere soluta ad!',
      },
    ];

    this.blueSectionData = [
      { icon: 'fa-solid fa-mug-saucer', count: '243', caption: 'CUPS OF MILK' },
      {
        icon: 'fa-solid fa-moon',
        count: '3861',
        caption: 'HOURS OF SLEEP SACRIFICED',
      },
      { icon: 'fa-solid fa-mug-hot', count: '414', caption: 'CUPS OF COFFEE' },
    ];

    this.testimoniesData = [
      {
        img: 'peter1.jpg',
        testimony: 'He is a man of focus, commitment, sheer will.',
        name: 'Peter Sthanlie Rayos',
        section: 'Assoc. in Computer Technology',
      },
      {
        img: 'ryk1.jpg',
        testimony:
          'He is an outstanding student, with good leadership skills. Excels at coding, and always willing to learn.',
        name: 'John Ryk Nava',
        section: 'Assoc. in Computer Technology',
      },
      {
        img: 'vera.jpg',
        testimony:
          'Serious, kind, and good at almost everything and holds nothing back.',
        name: 'Vera Jane Lazaraga',
        section: 'Assoc. in Computer Technology',
      },
      {
        img: 'marjorie.jpg',
        testimony: 'Naughty, honest, genius, and always open to help others.',
        name: 'Marjorie Anito',
        section: 'Assoc. in Computer Technology',
      },
      {
        img: 'diane.jpg',
        testimony: `He's one of the most genuine person I've met. Very sensible, family and goal-oriented, empathetic, and also, one call away.`,
        name: 'Vhaugnn Diane Patiño',
        section: 'Assoc. in Computer Technology',
      },
      {
        img: 'raven1.jpg',
        testimony: 'A hard-working and responsible man.',
        name: 'Raven Dela Rama',
        section: 'Assoc. in Computer Technology',
      },
    ];
  }
}
