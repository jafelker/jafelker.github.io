import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card'
import { MatTabsModule } from '@angular/material/tabs';
import { AboutMeComponent } from './about-me/about-me.component';
import { InfoComponent } from './info/info.component';
import { ProjectsComponent } from './projects/projects.component'

@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
    InfoComponent,
    ProjectsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatTabsModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
