import { Injectable } from '@nestjs/common';
import * as bcrypt from "bcrypt";

@Injectable()
export class PasswordHasherService {

    async generateHash(toBeHashed: string): Promise<string> {
        return bcrypt.hash(toBeHashed, 10);
    }

}
