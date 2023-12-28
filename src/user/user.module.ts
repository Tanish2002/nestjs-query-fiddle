import { Module } from '@nestjs/common';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { UserEntity, UserEntitySchema } from './user.entity';
import { UserDTO } from './dto/user.dto';
import { NestjsQueryMongooseModule } from '@ptc-org/nestjs-query-mongoose';
import { CloudinaryModule } from 'src/cloudinary/cloudinary.module';
import { UserInputDTO } from './dto/user.input.dto';
import { UserService } from './user.service';
@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [
        CloudinaryModule,
        NestjsQueryMongooseModule.forFeature([
          {
            document: UserEntity,
            name: UserEntity.name,
            schema: UserEntitySchema,
          },
        ]),
      ],
      services: [UserService],
      resolvers: [
        {
          DTOClass: UserDTO,
          CreateDTOClass: UserInputDTO,
          UpdateDTOClass: UserInputDTO,
          EntityClass: UserEntity,
          ServiceClass: UserService,
        },
      ],
    }),
  ],
})
export class UserModule { }
