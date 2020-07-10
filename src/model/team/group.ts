import { Team } from "./team";

export interface Group {
    description: string,
    team: Team
}

export interface TestGroupBaseLine {
    testTemplate: {
        code: string
    },
    expectedMaxTotalTime: number,
    expectedMinTotalTime: number,
    group: Group
}

export interface EdgeGroupBaseLine {
    testGroupBaseLine: TestGroupBaseLine,
    expectedMaxTime: number,
    expectedMinTime: number,
}
