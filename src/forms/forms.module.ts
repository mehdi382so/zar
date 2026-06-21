import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Form } from './entities/form.entity';
import { FormField } from './entities/form-field.entity';
import { FormPermission } from './entities/form-permission.entity';
import { FormSubmission } from './entities/form-submission.entity';
import { FormSubmissionValue } from './entities/form-submission-value.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([
            Form, FormField, FormPermission,
            FormSubmission, FormSubmissionValue
        ])
    ]
})
export class FormsModule {}
