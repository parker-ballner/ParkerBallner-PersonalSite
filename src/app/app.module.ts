import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent }  from './app.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  imports:      [ 
                  BrowserModule,
                  RouterModule.forRoot([
                    {
                      path: '',
                      redirectTo: '/aboutme',
                      pathMatch: 'full'
                    },
                    {
                      path: 'aboutme',
                      component: AboutMeComponent
                    },
                    {
                      path: 'workexperience',
                      component: WorkExperienceComponent
                    },
                    {
                      path: 'projects',
                      component: ProjectsComponent
                    },
                    {
                      path: 'contact',
                      component: ContactComponent
                    }
                  ])
                ],
  declarations: [ AppComponent, AboutMeComponent, WorkExperienceComponent, ProjectsComponent, ContactComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
