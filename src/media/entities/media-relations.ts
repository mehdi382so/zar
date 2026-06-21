import { BaseEntity } from "../../common/entities/base.entity";
import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { Media } from "./media.entity";

@Entity('media_relations')
export class MediaRelation extends BaseEntity {
  @Column({ name: 'media_id' })
  mediaId!: number;

  @Column({ name: 'entity_type' })
  entityType!: string;

  @Column({ name: 'entity_id' })
  entityId!: number;

  // To set the main Picture of contents ...
  @Column({
    name: 'is_cover',
    default: false,
  })
  isCover!: boolean;

  @Column({
    name: 'sort_order',
    default: 0,
  })
  sortOrder!: number;

  @ManyToOne(
    () => Media,
    (media) => media.relations,
    {
      onDelete: 'CASCADE',
    },
  )
  @JoinColumn({ name: 'media_id' })
  media!: Media;
}