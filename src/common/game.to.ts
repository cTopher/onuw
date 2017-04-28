import {Role} from './role'
export type Phase = 'setup' | 'night' | 'day'

export interface GameTo {
  phase: Phase
  roles: Role[]
  players: PlayerTo[]
}

export interface PlayerTo {
  name: string
  startingRole?: string
}
