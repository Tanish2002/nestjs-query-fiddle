// cloudinary-response.ts
import { UploadApiErrorResponse, UploadApiResponse } from 'cloudinary';

export type CloudinaryResponse =
  | CloudinarySuccessResponse
  | UploadApiErrorResponse;

interface CloudinarySuccessResponse {
  url: string;
  publicID: string;
}
