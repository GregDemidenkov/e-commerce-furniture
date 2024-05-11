import { Body, Controller, Get, Param, Patch } from "@nestjs/common"
import { ApiTags } from "@nestjs/swagger"

import { UserService } from "src/core/user/service/user.service"

import { ChangeUserDataDto } from "src/core/user/dto/changeUserData.dto"
import { IdDto } from "src/core/common/dto/id.dto"

@ApiTags('User')
@Controller('user')
export class UserController {

    constructor(private readonly userService: UserService) {}


    @Get(':id')
    getUser(@Param() dto: IdDto) {
        return this.userService.getUser(dto)
    }

    @Patch('/change')
    changeUserData(@Body() dto: ChangeUserDataDto) {
        return this.userService.changeUserData(dto)
    }

}