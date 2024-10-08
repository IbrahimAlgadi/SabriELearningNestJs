import {BeforeInsert, Column, Entity, PrimaryGeneratedColumn} from "typeorm";
import {Exclude, Expose} from "class-transformer";
// import { IsEmail, Length } from 'class-validator';
// import bcrypt from 'bcrypt';

@Entity({name: "users"})
export class UserEntity {

    @PrimaryGeneratedColumn()
    id: number;

    // @Column()
    // profileImage: string;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column({ type: 'varchar', length: 255, nullable: false, unique: true })
    username: string;

    @Column({ type: 'varchar', length: 255, nullable: false, unique: true })
    email: string;

    @Exclude()
    @Column({ type: 'varchar' })
    password: string;

    @Exclude()
    @Column({ type: 'boolean', default: false })
    isStaff: boolean;

    @Exclude()
    @Column({ type: 'boolean', default: false })
    isSuperuser: boolean;

    @Exclude()
    @Column({ type: 'boolean', default: true })
    isActive: boolean;

    @Exclude()
    @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
    dateJoined: Date;

    @Exclude()
    @Column({ type: 'datetime', nullable: true })
    lastLogin: Date;

    // groups [(name, permissions[ (name, content_type(app_label, model) ], codename))]
    // user_permissions [(name, content_type(app_label, model))]

    // @BeforeInsert()
    // async hashPassword() {
    //     this.username = this.email;
    // }

    // constructor(partial: Partial<UserEntity>) {
    //     Object.assign(this, partial)
    // }

    clean() {
        this.email = this.normalizeEmail(this.email);
    }

    @Expose()
    fullName(): string {
        const fullName = `${this.firstName} ${this.lastName}`;
        return fullName.trim();
    }

    emailUser(subject: string, message: string, fromEmail?: string) {
        // Logic to send an email to this user
    }

    private normalizeEmail(email: string): string {
        return email.trim().toLowerCase();
    }

}