import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { Field, InputType } from '@nestjs/graphql';
import { FileUpload, GraphQLUpload } from 'graphql-upload-minimal';

@InputType('UserUpdate')
export class UserUpdateDTO {
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
  avatar: FileUpload;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  @Field({ nullable: true })
  bio: string;
}
