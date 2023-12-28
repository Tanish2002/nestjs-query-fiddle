import { Model } from 'mongoose';
import { DeepPartial, QueryService } from '@ptc-org/nestjs-query-core';
import { InjectModel } from '@nestjs/mongoose';
import { MongooseQueryService } from '@ptc-org/nestjs-query-mongoose';
import { UserEntity } from './user.entity';

@QueryService(UserEntity)
export class UserService extends MongooseQueryService<UserEntity> {
  constructor(@InjectModel(UserEntity.name) userModel: Model<UserEntity>) {
    super(userModel);
  }

  createOne(record: DeepPartial<UserEntity>): Promise<UserEntity> {
    console.log('Record: ', record);
    const resp = super.createOne(record);
    console.log('Resp: ', resp);
    return resp;
  }
}
