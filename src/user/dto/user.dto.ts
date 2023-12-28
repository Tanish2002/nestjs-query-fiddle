// export class UserDto {}
import {
  FilterableField,
  IDField,
  KeySet,
  CursorConnection,
} from '@ptc-org/nestjs-query-graphql';
import { ObjectType, ID, Field } from '@nestjs/graphql';

@ObjectType('Avatar')
class Avatar {
  @Field()
  url: string;

  @Field()
  publicID: string;
}

@ObjectType('User')
@KeySet(['id', 'username'])
@CursorConnection('follower', () => UserDTO, {
  update: { enabled: true },
  nullable: true,
  disableFilter: true,
})
@CursorConnection('following', () => UserDTO, {
  update: { enabled: true },
  nullable: true,
  disableFilter: true,
})
export class UserDTO {
  @IDField(() => ID)
  id!: string;

  @FilterableField()
  username: string;

  @Field()
  password: string;

  @Field()
  name: string;

  @Field({ nullable: true })
  bio?: string;

  @Field((type) => Avatar, { nullable: true })
  avatar?: Avatar;
}
