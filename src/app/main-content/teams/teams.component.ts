import { Component, OnInit } from '@angular/core';
import { Services } from 'src/app/app.services';
import { Teams } from './teams.model';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit{
  teams: Teams[] = [];

  constructor(private service: Services){
  }

  ngOnInit(): void {

    this.service.getAllTeams().subscribe(
      (data: any) => {
        this.teams = data;
      },
      (error) => {
        console.error('Error geting teams: ', error);
      }
    )
  }
}
