import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../../components/home/home.component';
import { MyStoryComponent } from '../../components/my-story/my-story.component';
import { SkillsComponent } from '../../components/skills/skills.component';
import { PortfolioComponent } from '../../components/portfolio/portfolio.component';
import { ResumeComponent } from '../../components/resume/resume.component';
import { ErrorComponent } from '../../components/error/error.component';
import { InteractWithMeComponent } from '../../components/interact-with-me/interact-with-me.component';


const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'my-story', component: MyStoryComponent },
    { path: 'skills', component: SkillsComponent },
    { path: 'portfolio', component: PortfolioComponent },
    { path: 'resume', component: ResumeComponent },
    { path: 'interact-with-me', component: InteractWithMeComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: ErrorComponent }
    
    
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
