import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { type } from 'os';
import { TestExecutionTurnEntity } from './test-execution-turn.entity';

@Entity('test-execution-edge')
export class TestExecutionEdgeEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(
    type => TestExecutionTurnEntity,
    turn => turn.edges,
  )
  turn: TestExecutionTurnEntity;

  @Column({ type: 'int' })
  sequence: number;

  @Column({ type: 'varchar' })
  description: string;

  @Column({ type: 'int' })
  startTimeStamp: number;

  @Column({ type: 'int' })
  endTimeStamp: number;

  @Column({ type: 'float' })
  distance: number;

  @Column({ type: 'varchar' })
  startNode: string;

  @Column({ type: 'varchar' })
  endNode: string;
}
