import { Injectable } from '@nestjs/common';
import * as bcrypt from "bcrypt";

@Injectable()
export class PasswordHasherService {

    async generateHash(toBeHashed: string): Promise<string> {
        return bcrypt.hash(toBeHashed, 10);
    }

    async comparePasswordHash(plainPassword: string, userPassword: string): Promise<boolean> {
        return await bcrypt.compare(plainPassword, userPassword);
    }

}
