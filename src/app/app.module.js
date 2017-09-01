"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var app_component_1 = require("./app.component");
var aboutMe_component_1 = require("./aboutMe/aboutMe.component");
var workExperience_component_1 = require("./workExperience/workExperience.component");
var projects_component_1 = require("./projects/projects.component");
var contact_component_1 = require("./contact/contact.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            router_1.RouterModule.forRoot([
                {
                    path: '',
                    redirectTo: '/aboutme',
                    pathMatch: 'full'
                },
                {
                    path: 'aboutme',
                    component: aboutMe_component_1.AboutMeComponent
                },
                {
                    path: 'workexperience',
                    component: workExperience_component_1.WorkExperienceComponent
                },
                {
                    path: 'projects',
                    component: projects_component_1.ProjectsComponent
                },
                {
                    path: 'contact',
                    component: contact_component_1.ContactComponent
                }
            ])
        ],
        declarations: [app_component_1.AppComponent, aboutMe_component_1.AboutMeComponent, workExperience_component_1.WorkExperienceComponent, projects_component_1.ProjectsComponent, contact_component_1.ContactComponent],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map