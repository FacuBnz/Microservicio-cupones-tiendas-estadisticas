import { Entity, Column, PrimaryColumn } from 'typeorm'

@Entity({name: 'coupons'})

export class Coupon{

    @Column({ type : "time without time zone", name: "assigned_at", nullable: true})
    assignedAt : Date

    @Column({ type: "character", length: 8, name: "code"})
    code : string

    @Column({type : "text", name: "customer_email", nullable: true})
    customerEmail : string

    @PrimaryColumn({type: "bigint"})
    id : number

    @Column({ type : "time without time zone", name: "expires_at", nullable: true})
    expiresAt : Date


}