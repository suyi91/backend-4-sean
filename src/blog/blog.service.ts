import { Injectable } from '@nestjs/common';
import { exec } from 'child_process';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class BlogService {
  constructor(private readonly configService: ConfigService) {}

  refreshBlog() {
    return new Promise((resolve, reject) => {
      exec(this.configService.get('BLOG_REFRESH_SCRIPT'), (err, output) => {
        if (err) {
          reject(err);
        } else {
          resolve(output);
        }
      });
    });
  }
}
