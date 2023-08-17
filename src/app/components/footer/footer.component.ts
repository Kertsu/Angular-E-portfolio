import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  footerData: any;

  constructor() {
    this.footerData = [
      {
        link: 'https://web.facebook.com/Kertsuuu/',
        icon: 'fa-brands fa-facebook',
      },
      {
        link: 'https://www.instagram.com/_kertsu/',
        icon: 'fa-brands fa-instagram',
      },
      {
        link: 'https://discordapp.com/users/871991331294171166',
        icon: 'fa-brands fa-discord',
      },
      { link: 'https://github.com/Kertsu', icon: 'fa-brands fa-github' },
      { link: 'https://gitlab.com/Kertsu', icon: 'fa-brands fa-gitlab' },
      {
        link: 'https://www.youtube.com/channel/UC12uScJNLq-tjVa_KeTf1TA',
        icon: 'fa-brands fa-youtube',
      },
    ];
  }
}
