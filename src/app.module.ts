import { Module } from '@nestjs/common';
import { AuthMudule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { BookmarkModule } from './bookmark/bookmark.module';

@Module({
  imports: [AuthMudule, UserModule, BookmarkModule],
})
export class AppModule {}
