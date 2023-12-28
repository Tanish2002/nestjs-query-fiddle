import { Injectable } from '@nestjs/common';
import {
  BeforeCreateOneHook,
  CreateOneInputType,
} from '@ptc-org/nestjs-query-graphql';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';
import { UserInputDTO } from './user.input.dto';

@Injectable()
export class CreatedByHook implements BeforeCreateOneHook<UserInputDTO> {
  constructor(readonly cloudinaryService: CloudinaryService) {}
  async run(
    instance: CreateOneInputType<UserInputDTO>,
    context: any,
  ): Promise<CreateOneInputType<UserInputDTO>> {
    const { url, publicID } = await this.cloudinaryService.uploadFile(
      await instance.input.avatar,
    );
    return {
      input: {
        username: instance.input.username,
        bio: instance.input.bio,
        name: instance.input.name,
        password: instance.input.password,
        avatar: {
          // @ts-ignore
          url: url,
          publicID: publicID,
        },
      },
    };
  }
}
