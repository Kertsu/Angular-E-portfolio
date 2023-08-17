import { AfterViewInit, Component, ElementRef, Renderer2 } from '@angular/core';
import { StyleService } from 'src/app/services/style.service';
import { Base } from '../base/base';

@Component({
  selector: 'app-interests',
  templateUrl: './interests.component.html',
  styleUrls: ['./interests.component.css'],
})
export class InterestsComponent extends Base implements AfterViewInit {
  bannerData: any;
  interestsData: any;

  ngAfterViewInit(): void {
    this.setHeight(
      this.styleService,
      this.elementRef,
      '.interests-sec-1',
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
      class: 'interests',
      title: 'Interests.',
      caption: 'What brings you here? Interest, indeed.',
      author: '-k.d.',
    };
    this.interestsData = [
      {
        img: `gon.png`,
        name: `Gon Freecss`,
        caption: `One of the main character in Hunter x Hunter, so as the protagonist. He is a young boy who wants to become a hunter to be able to see his father, Ging Freecs.`,
        nen: `65`,
      },
      {
        img: `killua.jpg`,
        name: `Killua Zoldyck`,
        caption: `The third child of Silva and Kikyo Zoldyck. At a very young age, he was being trained to become an assassin. He joined the hunter exam and met Gon Freecs, his bestfriend.`,
        nen: `60`,
      },
      {
        img: `kurapika.jpg`,
        name: `Kurapika Kurta`,
        caption: `He is the last survivor of the Kurta Clan. His goal is to avenge his clan against the Phantom Troupe and recover the remaining scarlet eyes.`,
        nen: `60`,
      },
      {
        img: `leorio.jpg`,
        name: `Leorio Paradinight`,
        caption: `He is a Rookie hunter like Gon, Killua, and Kurapika. He is a medical student, studying to become a doctor.`,
        nen: `45`,
      },
      {
        img: `hisoka.jpg`,
        name: `Hisoka Morrow`,
        caption: `Hisoka is a self-centered magician, selfish, and in always in search for strong opponents. He originally served as the primary antagonist before becoming a supporting character on the later part of the series. He is so powerful that he was almost always shown to be unmatched.`,
        nen: `75`,
      },
      {
        img: `chrollo.jpg`,
        name: `Chrollo Lucilfer`,
        caption: `Chrollo: The Skill-Stealing Specialist, is the founder, leader, and the #0 of the Phantom Troupe. He ranks as the second strongest among the group. With his Nen, he can conjure his Bandit's book. With this, Chrollo has to follow certain conditions to steal various abilities from other Nen users.`,
        nen: `70`,
      },
      {
        img: `ging.png`,
        name: `Ging Freecss`,
        caption: `He is the father of Gon Freecss, a Double-Star Ruins Hunter. Finding him was Gon's motivation for becoming a hunter.`,
        nen: `70`,
      },
      {
        img: `illumi.jpg`,
        name: `Illumi Zoldyck`,
        caption: `A manipulator. He is the brother of Killua Zoldyck. Can be seen almost always together with Hisoka. Also known as Gittarackur.`,
        nen: `70`,
      },
    ];
  }
}
