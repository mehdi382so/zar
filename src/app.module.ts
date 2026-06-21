import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import typeormConfig from './config/typeorm.config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MediaModule } from './media/media.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { LogModule } from './log/log.module';
import { ContentsModule } from './contents/contents.module';
import { FormsModule } from './forms/forms.module';
import { ProductsModule } from './products/products.module';
import { PeopleModule } from './people/people.module';
import { AgentModule } from './agent/agent.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [typeormConfig],
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) =>
        configService.get<any>('typeorm'),
    }),
    MediaModule,
    UsersModule,
    AuthModule,
    LogModule,
    ContentsModule,
    FormsModule,
    ProductsModule,
    PeopleModule,
    AgentModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
