import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { User } from "src/core/models/user.model/user.model";
import { UsersService } from "./users.service";
import { Profile } from "src/core/models/profile.model/profile.model";

@Module({
  imports: [SequelizeModule.forFeature([User, Profile])],
  providers: [UsersService],
  exports: [SequelizeModule]
})
export class UsersModule {}
