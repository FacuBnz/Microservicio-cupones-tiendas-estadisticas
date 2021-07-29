import { Entity, Column, PrimaryColumn } from 'typeorm'

@Entity({name: 'stores'})

export class Store{
    @PrimaryColumn({type: "bigint"})
    id : number

    @Column({type: "text", nullable: true})
    name : string

    @Column({type: "text", nullable: true})
    address : string
}