import { Injectable } from '@nestjs/common';
import { v2 as cloudinary } from 'cloudinary';
import { CloudinaryResponse } from './cloudinary/cloudinary-response';
import { FileUpload } from 'graphql-upload-minimal';
// const streamifier = require('streamifier');

@Injectable()
export class CloudinaryService {
  // uploadFile(file: FileUpload, publicID?: string): Promise<CloudinaryResponse> {
  //   return new Promise<CloudinaryResponse>((resolve, reject) => {
  //     const uploadStream = cloudinary.uploader.upload_stream(
  //       {
  //         resource_type: 'auto',
  //         allowed_formats: ['jpg', 'png'],
  //         public_id: publicID ? publicID : '',
  //         invalidate: true,
  //         overwrite: true,
  //         folder: 'tweets_media',
  //       },
  //       (error, result) => {
  //         if (error) return reject(error);
  //         const modifiedUrl = result.secure_url.replace(
  //           '/upload/',
  //           '/upload/q_auto/',
  //         );
  //         resolve({ url: modifiedUrl, publicID: result.public_id });
  //       },
  //     );
  //     file.createReadStream().pipe(uploadStream);
  //   });
  // }
  uploadFile(file: FileUpload, publicID?: string): Promise<CloudinaryResponse> {
    return new Promise<CloudinaryResponse>((resolve, reject) => {
      resolve({ publicID: 'some public ID', url: 'some url' });
    });
  }
}
