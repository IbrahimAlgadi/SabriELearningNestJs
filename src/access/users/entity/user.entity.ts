import {BeforeInsert, Column, Entity, PrimaryGeneratedColumn} from "typeorm";
// import { IsEmail, Length } from 'class-validator';
// import bcrypt from 'bcrypt';

@Entity({name: "users"})
export class UserEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column({ type: 'varchar', length: 255, nullable: false, unique: true })
    username: string;

    @Column({ type: 'varchar', length: 255, nullable: false, unique: true })
    email: string;

    @Column({ type: 'varchar' })
    password: string;

    @Column({ type: 'boolean', default: false })
    isStaff: boolean;

    @Column({ type: 'boolean', default: false })
    isSuperuser: boolean;

    @Column({ type: 'boolean', default: true })
    isActive: boolean;

    @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
    dateJoined: Date;

    @Column({ type: 'datetime', nullable: true })
    lastLogin: Date;

    // groups [(name, permissions[ (name, content_type(app_label, model) ], codename))]
    // user_permissions [(name, content_type(app_label, model))]

    // @BeforeInsert()
    // async hashPassword() {
    //     this.password = await bcrypt.hash(this.password, 10);
    // }

    clean() {
        this.email = this.normalizeEmail(this.email);
    }

    getFullName(): string {
        const fullName = `${this.firstName} ${this.lastName}`;
        return fullName.trim();
    }

    getShortName(): string {
        return this.firstName;
    }

    emailUser(subject: string, message: string, fromEmail?: string) {
        // Logic to send an email to this user
    }

    private normalizeEmail(email: string): string {
        return email.trim().toLowerCase();
    }

}