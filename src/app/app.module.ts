//core dependencies
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';

//modules
import { AppRoutingModule } from './modules/routing/routing.module';

//components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';
import { InteractWithMeComponent } from './components/interact-with-me/interact-with-me.component';
import { MyStoryComponent } from './components/my-story/my-story.component';
import { SkillsComponent } from './components/skills/skills.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ResumeComponent } from './components/resume/resume.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ErrorComponent,
    InteractWithMeComponent,
    MyStoryComponent,
    SkillsComponent,
    PortfolioComponent,
    ResumeComponent
  ],
  imports: [
      BrowserModule,
      AppRoutingModule,
      BrowserAnimationsModule,
      MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
