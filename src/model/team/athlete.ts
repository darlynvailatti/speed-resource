import { Group } from "./group";

export interface Athlete {
    code?: string,
    name: string
}

export interface AthleteGroup {
    startDate: Date,
    endDate: Date,
    athlete: Athlete,
    group: Group
}

export interface AthleteBodyMensure {
    when: Date,
    weight: number,
    height: number,
    athlete: Athlete
}


