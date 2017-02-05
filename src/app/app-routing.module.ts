import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutMeComponent } from './about-me/about-me.component';
import { InfoComponent } from './info/info.component';
import { ProjectsComponent } from './projects/projects.component';

const routes: Routes = [
  {
    path: 'about-me',
    component: AboutMeComponent,
  },
  {
    path: 'info',
    component: InfoComponent
  },
  {
    path: 'projects',
    component: ProjectsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
