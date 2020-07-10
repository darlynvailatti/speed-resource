import { Module } from "@nestjs/common";
import { TeamModule } from "./module/team/team.module";
import { TestEnvironmentModule } from "./module/test-environment/test.environment.module";


@Module({
    imports: [TeamModule, TestEnvironmentModule]
})
export class AppModule {

}