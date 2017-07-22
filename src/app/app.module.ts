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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ErrorComponent,
    InteractWithMeComponent
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
