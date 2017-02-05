import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  public title = 'Projects';

  private projects = [
    {
      title: 'UNO&reg; Online!',
      link: 'http://joshuafelker.com/uno',
      repo: 'http://github.com/jafelker/uno',
      img: 'uno.png',
      description: 'This is a web app that I designed and implemented with a team of four for my UI class in college.'
    }
  ];
}
