import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent }  from './app.component';
import { AboutMeComponent } from './aboutMe/aboutMe.component';
import { WorkExperienceComponent } from './workExperience/workExperience.component';

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
                    }
                  ])
                ],
  declarations: [ AppComponent, AboutMeComponent, WorkExperienceComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
