import { Controller, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { BlogService } from './blog.service';

@Controller('blog')
export class BlogController {
  constructor(private readonly blogService: BlogService) {}

  @Post('refresh')
  async refreshBlog(@Res() res: Response) {
    const result = await this.blogService.refreshBlog();
    res.send(result);
  }
}
