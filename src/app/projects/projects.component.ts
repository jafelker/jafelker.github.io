import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  public projects = [
    {
      title: 'Unstable Towers',
      link: 'https://adamk33n3r.itch.io/unstable-towers',
      repo: 'https://github.com/adamk33n3r/LD49',
      img: 'unstable-towers.png',
      description: 'Ludem Dare 49 was the first game jam I participated in. I entered into the jam with one other person.'
    },
    {
      title: 'Block Breaker',
      link: '/BlockBreaker',
      repo: 'http://github.com/jafelker/BlockBreaker',
      img: 'BlockBreaker.png',
      description: 'This is my first game using Unity.'
    },
    {
      title: 'UNO&reg; Online!',
      link: '/uno',
      repo: 'http://github.com/jafelker/uno',
      img: 'uno.png',
      description: 'This is a web app that I designed and implemented with a team of four for my UI class in college.'
    },
  ];
}
