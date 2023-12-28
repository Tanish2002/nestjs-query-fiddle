import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { Field, InputType } from '@nestjs/graphql';
import { FileUpload, GraphQLUpload } from 'graphql-upload-minimal';
import { BeforeCreateOne } from '@ptc-org/nestjs-query-graphql';
import { CreatedByHook } from './user.input.hook.dto';

@InputType('UserInput')
@BeforeCreateOne(CreatedByHook)
export class UserInputDTO {
  @IsString()
  @IsNotEmpty()
  @Field()
  username: string;

  @IsString()
  @IsNotEmpty()
  @Field()
  password: string;

  @IsString()
  @Field()
  @IsNotEmpty()
  name: string;

  @Field((type) => GraphQLUpload)
  avatar: Promise<FileUpload>;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  @Field({ nullable: true })
  bio: string;
}
