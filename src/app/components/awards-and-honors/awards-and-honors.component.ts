import { Component } from '@angular/core';

@Component({
  selector: 'app-awards-and-honors',
  templateUrl: './awards-and-honors.component.html',
  styleUrls: ['./awards-and-honors.component.css'],
})
export class AwardsAndHonorsComponent {
  bannerData: any;
  blueSectionData: any;
  testimoniesData: any;
  timelineData: any;
  cardData: any;
  constructor() {
    this.bannerData = {
      class: 'awards',
      title: 'Awards.',
      caption:
        'I am the vine, ye are the branches: He that abideth in me, and I in him, the same bringeth forth much fruit: for without me ye can do nothing.',
      author: 'John 15:5',
    };

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
        img: 'romel.jpg',
        testimony:
          'I am learning a lot from him. Every day, he inspires me to be a better person.',
        name: 'Romel Razon',
        section: 'Assoc. in Computer Technology',
      },
      {
        img: 'criselda.jpg',
        testimony:
          'He is a very enthusiastic student and a helpful classmate; he is also a great teacher to us.',
        name: 'Criselda Mondares',
        section: 'Assoc. in Computer Technology',
      },
      {
        img: 'rachelle.jpg',
        testimony:
          'He is thoughtful and kind in his interactions with his peers, and is a hardworking student.',
        name: 'Rachelle Fualo',
        section: 'Assoc. in Computer Technology',
      },
      {
        img: 'au.jpg',
        testimony:
          'Great sense of humour and really chill. Diligent to his studies, expect nothing less from this guy.',
        section: 'BS Information Systems',
      },
      {
        img: 'no-image.png',
        testimony: `He has this intimidating aura but he's kind - kinda bossy Kurtd is humble and a friendly one, always open to help others(1).`,
        name: 'Armie Jean Miranda',
        section: 'BS Information Systems',
      },
      {
        img: 'kayla.png',
        testimony: 'Nice and smart. He enjoys everything he does.',
        name: 'Raven Dela Rama',
        section: 'BS Information Systems',
      },
    ];

    this.timelineData = [
      {
        date: '2020',
        event: 'With Honors',
        title: 'Cavite National High School - Senior High School',
      },
      {
        date: '2021',
        event: 'Entrance Exam Passed',
        title: 'La Verdad Christian College',
      },
      {
        date: '2022',
        event: `President's Lister`,
        title: 'Associate In Computer Technology - 1st Year',
      },
      {
        date: '2022',
        event: 'Certificate of Participation',
        title: 'BSIS Colloquium',
      },
      {
        date: '2023',
        event: 'Capture The Flag Champion',
        title: 'Cybersecurity Competition',
      },
      {
        date: '2023',
        event: 'Gold Medalist',
        title: 'La Verdad Christian College',
      },
    ];

    this.cardData = [
      {
        img: 'award1.jpg',
        title: 'With Honors',
        caption:
          'I was able to achieve and get an award before I leave my Alma Mater. I was not really that happy for this achievement because I know that I did not do my best and I did not study well way back when I was in senior high school.',
      },
      {
        img: 'award-hero.jpg',
        title: 'Entrance Exam Passed',
        caption: `With God's help and mercy I was able to pass the entrance exam in La Verdad Christian College. I consider this as an achievement because that was my first time taking an entrance exam.`,
      },
      {
        img: 'award2.jpg',
        title: `President's Lister`,
        caption: `With the help of God, I was awarded to be a President's Lister for both the first semester and second semester. I was so happy that time because that was my first time taking my studies seriously and it was also my first time getting that kind of awards in my whole school life.`,
      },
      {
        img: 'certificate.png',
        title: 'Certificate of Participation',
        caption: `Our group in Computer Programming II was asked to present our work in the Research Colloquium of our seniors. We built a game using Unity Game Engine: all the animations, character, and backgrounds were originally created by us. The source code for the movements was also created by us. I watched a lot of videos just to be able to learn how things work in Unity.`,
      },
    ];
  }
}
