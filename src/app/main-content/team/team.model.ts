export interface Player {
  id: number;
  name: string;
  lastName: string;
  birthDate: string;
  position: PositionRole;
  preferredHand: PreferredHand;
  injuryHistory?: string;
  team?:Team;
}

export enum PositionRole {
  GOALKEEPER = 'Goealkeeper',
  DEFENDER = 'Defender',
  MIDFIELDER = 'Midfielder',
  FORWARD = 'Foward',
  PIVOT = 'Pivot'
}

export enum PreferredHand {
  RIGHT = 'Right',
  LEFT = 'Left',
  AMBIDEXTROUS = 'Ambidextrous'
}

export interface Team{
  id: number;
  name: string;
  player: Player[];
}
