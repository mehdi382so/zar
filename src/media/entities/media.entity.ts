import { Column, Entity, OneToMany } from "typeorm";
import { MediaRelation } from "./media-relations";
import { BaseEntity } from "../../common/entities/base.entity";

@Entity('media')
export class Media extends BaseEntity {
  @Column()
  type!: string; // image, file, ...

  @Column({ name: 'original_name' })
  originalName!: string;

  @Column({ name: 'mime_type' })
  mimeType!: string;

  @Column({ type: 'bigint' })
  size!: string;

  @Column({ name: 'file_name' })
  fileName!: string;

  @Column()
  path!: string;

  @Column()
  extension!: string;

  @OneToMany(
    () => MediaRelation,
    (mediaRelation) => mediaRelation.media,
  )
  relations!: MediaRelation[];
}