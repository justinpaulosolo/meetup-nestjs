import { Injectable } from '@nestjs/common';
import * as AWS from 'aws-sdk';
@Injectable()
export class FileUploadService {
  AWS_S3_BUCKET = process.env.AWS_S3_BUCKET;
  s3 = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  });

  async uploadFile(file) {
    const { originalname } = file;

    await this.s3Upload(file.buffer, this.AWS_S3_BUCKET, originalname);
  }

  async s3Upload(file, bucket, name) {
    const params = {
      Bucket: bucket,
      Key: String(name),
      Body: file,
    };
    console.log(params);

    try {
      const s3Response = await this.s3.upload(params).promise();
      console.log(s3Response);
    } catch (e) {
      console.log(e);
    }
  }
}
