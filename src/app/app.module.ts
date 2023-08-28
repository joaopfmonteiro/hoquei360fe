import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LateralHeaderComponent } from './lateral-header/lateral-header.component';
import { TopHeaderComponent } from './top-header/top-header.component';
import { MainContentComponent } from './main-content/main-content.component';
import { TeamsComponent } from './main-content/teams/teams.component';
import { TeamComponent } from './main-content/team/team.component';
import { HomeComponent } from './main-content/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { PlayerComponent } from './main-content/team/player/player.component';


@NgModule({
  declarations: [
    AppComponent,
    LateralHeaderComponent,
    TopHeaderComponent,
    MainContentComponent,
    TeamsComponent,
    TeamComponent,
    HomeComponent,
    PlayerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
