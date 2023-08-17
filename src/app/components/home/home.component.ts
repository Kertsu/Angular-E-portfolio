import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  progLangs!: any;
  blueSectionData!: any;
  information!: any;
  services!: any;

  constructor() {
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
  }
}
