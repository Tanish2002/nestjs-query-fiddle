import mongoose, { Document } from 'mongoose';
import { Prop, SchemaFactory } from '@nestjs/mongoose';

export class Avatar {
  @Prop({ required: true })
  url: string;

  @Prop({ required: true })
  publicID: string;
}

export class UserEntity extends Document {
  @Prop({ unique: true, required: true })
  username: string;

  @Prop({ required: true })
  password: string;

  @Prop({ required: true })
  name: string;

  @Prop({ type: () => Avatar })
  avatar?: Avatar;

  @Prop()
  bio?: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'UserEntity' })
  followers?: UserEntity[];

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'UserEntity' })
  following?: UserEntity[];
}

export const UserEntitySchema = SchemaFactory.createForClass(UserEntity);
