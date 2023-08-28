import { HttpClient } from '@angular/common/http'
import { Injectable } from "@angular/core"
import { PositionRole, PreferredHand, Team } from './main-content/team/team.model';

@Injectable({
  providedIn: 'root'
})

export class Services{

  private apiServerUrl = 'http://localhost:8080/api';

  constructor(
    private http: HttpClient){
    }

  getAllTeams()
  {
    return this.http.get<any>(`${this.apiServerUrl}/team`);
  }

  getPlayerByTeam()
  {
    return this.http.get<any>(`${this.apiServerUrl}/player`);
  }

  creatPlayer(name: string, lastName: string, birthDate: string,
    position: PositionRole, preferredHand: PreferredHand,
    injuryHistory?: string, team?: Team)
  {
    const body = {
      name: name,
      lastName: lastName,
      birthDate: birthDate,
      position: position,
      preferredHand: preferredHand,
      team: team
    }
    return this.http.post(`${this.apiServerUrl}/player`, body);
  }

}
