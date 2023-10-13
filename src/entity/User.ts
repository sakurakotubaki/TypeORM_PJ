import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"
// MySQLで使用するテーブル名を定義
@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column()
    age: number

}
