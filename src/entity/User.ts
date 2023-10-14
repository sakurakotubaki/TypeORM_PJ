import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"
// MySQLで使用するテーブル名を定義
@Entity()
export class User {
    getName(): any {
        throw new Error("Method not implemented.")
    }

    postName(): any {
        throw new Error("Method not implemented.")
    }

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column()
    age: number

}
