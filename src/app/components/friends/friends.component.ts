import { AfterViewInit, Component, ElementRef, Renderer2 } from '@angular/core';
import { StyleService } from 'src/app/services/style.service';
import { Base } from '../base/base';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css'],
})
export class FriendsComponent extends Base implements AfterViewInit {
  bannerData: any;
  friendsData: any;

  ngAfterViewInit(): void {
    this.setHeight(
      this.styleService,
      this.elementRef,
      '.friends-sec-1',
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
      class: 'friends',
      title: 'Friends.',
      caption: 'Persons that you could share your problems with.',
      author: '-k.d.',
    };

    this.friendsData = [
      {
        img: 'ryk.jpg',
        name: 'John Ryk Nava',
        accounts: [
          {
            link: 'https://www.facebook.com/johnryk.nava.27',
            icon: 'fa-brands fa-facebook',
          },
          {
            link: 'https://www.instagram.com/johnryk_nava/',
            icon: 'fa-brands fa-instagram',
          },
          { link: 'https://gitlab.com/Ryykk', icon: 'fa-brands fa-gitlab' },
        ],
      },
      {
        img: 'raven.jpg',
        name: 'Raven Dela Rama',
        accounts: [
          {
            link: 'https://www.facebook.com/raven.delarama.5',
            icon: 'fa-brands fa-facebook',
          },
          {
            link: 'https://www.instagram.com/rraaveennn/',
            icon: 'fa-brands fa-instagram',
          },
          { link: 'https://github.com/Raven2510', icon: 'fa-brands fa-github' },
        ],
      },
      {
        img: 'jireh.jpg',
        name: 'Jireh Belen',
        accounts: [
          {
            link: 'https://www.facebook.com/jiereh12',
            icon: 'fa-brands fa-facebook',
          },
          {
            link: 'https://www.instagram.com/jiiiireeeh/',
            icon: 'fa-brands fa-instagram',
          },
          {
            link: 'https://gitlab.com/jirehbelen',
            icon: 'fa-brands fa-gitlab',
          },
        ],
      },
      {
        img: 'allen.jpg',
        name: 'Allen Magadia',
        accounts: [
          {
            link: 'https://www.facebook.com/allenmagadia11',
            icon: 'fa-brands fa-facebook',
          },
          {
            link: 'https://www.instagram.com/_soramagadia/',
            icon: 'fa-brands fa-instagram',
          },
          { link: 'https://gitlab.com/Sora1173', icon: 'fa-brands fa-gitlab' },
        ],
      },
      {
        img: 'peter.jpg',
        name: 'Peter Sthanlie Rayos',
        accounts: [
          {
            link: 'https://www.facebook.com/PeterSthanlie',
            icon: 'fa-brands fa-facebook',
          },
          {
            link: 'https://www.instagram.com/petersthanlie/',
            icon: 'fa-brands fa-instagram',
          },
          { link: 'https://gitlab.com/oivura', icon: 'fa-brands fa-gitlab' },
        ],
      },
      {
        img: 'jc.jpg',
        name: 'John Carlo Diga',
        accounts: [
          {
            link: 'https://web.facebook.com/johncarlo.diga18',
            icon: 'fa-brands fa-facebook',
          },
          {
            link: 'https://www.instagram.com/jcdigs_/',
            icon: 'fa-brands fa-instagram',
          },
          { link: 'https://twitter.com/_jcdiga', icon: 'fa-brands fa-twitter' },
        ],
      },
      {
        img: 'jayvee.jpg',
        name: 'Jayvee Brian Ibale',
        accounts: [
          {
            link: 'https://web.facebook.com/jayvee.brian.96',
            icon: 'fa-brands fa-facebook',
          },
          {
            link: 'https://www.instagram.com/jeibyyy_briiaan/',
            icon: 'fa-brands fa-instagram',
          },
          {
            link: 'https://www.tiktok.com/@jayveebrian7',
            icon: 'fa-brands fa-tiktok',
          },
        ],
      },
      {
        img: 'jm.jpg',
        name: 'Johnmark Faeldonia',
        accounts: [
          {
            link: 'https://www.facebook.com/johnmac.pareja/',
            icon: 'fa-brands fa-facebook',
          },
          {
            link: 'https://www.instagram.com/johnmack_faeldonia/',
            icon: 'fa-brands fa-instagram',
          },
          {
            link: 'https://gitlab.com/johmmackfaeldonia',
            icon: 'fa-brands fa-gitlab',
          },
        ],
      },
    ];
  }
}
