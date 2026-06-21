import { registerAs } from '@nestjs/config';
import { config as dotenvConfig } from 'dotenv';
import { join } from 'path';
import { DataSource, DataSourceOptions } from 'typeorm';

import { Media } from '../media/entities/media.entity';
import { MediaRelation } from '../media/entities/media-relations';
import { User } from '../users/entities/user.entity';
import { Role } from '../users/entities/role.entity';
import { Permission } from '../users/entities/permissions.entity';
import { BlockedIp } from '../auth/entities/blocked-ip.entity';
import { OtpCode } from '../auth/entities/otp-codes.entity';
import { AuditLog } from '../log/entities/audit-logs.entity';
import { SecurityLog } from '../log/entities/security-logs.entity';
import { SystemLog } from '../log/entities/system-logs.entity';
import { Content } from '../contents/entities/content.entity';
import { ContentReport } from '../contents/entities/content-reports.entity';
import { Category } from '../contents/entities/category.entity';
import { Comment } from '../contents/entities/comment.entity';
import { Rating } from '../contents/entities/rating.entity';
import { Tag } from '../contents/entities/tag.entity';
import { Form } from '../forms/entities/form.entity';
import { FormField } from '../forms/entities/form-field.entity';
import { FormPermission } from '../forms/entities/form-permission.entity';
import { FormSubmission } from '../forms/entities/form-submission.entity';
import { FormSubmissionValue } from '../forms/entities/form-submission-value.entity';
import { Product } from '../products/entities/product.entity';
import { ProductAttribute } from '../products/entities/product-attribute.entity';
import { ProductMedia } from '../products/entities/product-media.entity';
import { People } from '../people/entities/people.entity';
import { PeopleSection } from '../people/entities/people-section.entity';
import { Rank } from '../people/entities/rank.entity';
import { Agent } from '../agent/entities/agent.entity';
import { AgentUser } from '../agent/entities/agent-users.entity';

dotenvConfig({ path: '.env' });

const typeormConfig = {
  type: 'postgres' as const,
  host: process.env.DATABASE_HOST,
  port: Number(process.env.DATABASE_PORT) || 5432,
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASS,
  database: process.env.DATABASE_NAME,
  entities: [
    Media, MediaRelation,
    User, Role, Permission,
    BlockedIp, OtpCode,
    AuditLog, SecurityLog, SystemLog,
    Content, ContentReport, Category, Comment, Rating, Tag,
    Form, FormField, FormPermission,
    FormSubmission, FormSubmissionValue,
    Product, ProductAttribute, ProductMedia,
    People, PeopleSection, Rank,
    Agent, AgentUser
  ],
  migrations: [join(__dirname, '../migrations/*{.ts,.js}')],
  autoLoadEntities: false,
  synchronize: process.env.NODE_ENV !== 'production',
};

export default registerAs('typeorm', () => typeormConfig);

export const connectionSource = new DataSource(
  typeormConfig as DataSourceOptions,
);
