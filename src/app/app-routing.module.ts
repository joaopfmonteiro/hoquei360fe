import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './main-content/home/home.component';
import { TeamsComponent } from './main-content/teams/teams.component';
import { MainContentComponent } from './main-content/main-content.component';
import { TeamComponent } from './main-content/team/team.component';
import { PlayerComponent } from './main-content/team/player/player.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'teams', component: TeamsComponent },
  {
    path: '',
    component: MainContentComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'teams', component: TeamsComponent },
      { path: 'team', component: TeamComponent },
      { path: 'creat_player', component: PlayerComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
