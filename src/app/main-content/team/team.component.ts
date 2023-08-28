import { Component, OnInit } from '@angular/core';
import { Services } from 'src/app/app.services';
import { Player, Team } from './team.model';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit{
  team: Team[] = [];

  constructor(private service: Services){
  }

  ngOnInit(): void {

    this.service.getAllTeams().subscribe(
      (data: any) => {
        this.team = data;
        console.log(this.team)
      },
      (error) => {
        console.error('Error geting teams: ', error);
      }
    )
  }
}
