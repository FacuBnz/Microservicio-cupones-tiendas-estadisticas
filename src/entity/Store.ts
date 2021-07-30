import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity({name: 'stores'})

export class Store{
    @PrimaryGeneratedColumn({type: "bigint"})
    id : number

    @Column()
    name : string

    @Column()
    address : string
}