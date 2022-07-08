import { Model } from 'mongoose';
import bcrypt from 'bcryptjs';

import {
    ISignIn,
    ISignUp,
    IUser,
    IUserDto,
} from '../interface/user.interface/user.interface';
import HttpException from '../utils/http.exception';

export default class AuthService {
    constructor(private readonly userModel: Model<IUser>) {
        this.userModel = userModel;
    }

    signUp = async (data: IUserDto): Promise<ISignUp> => {
        try {
            const { username, password } = data;
            const hashPassword = await bcrypt.hash(password, 12);
            const newUser = await this.userModel.create({
                username,
                password: hashPassword,
            });

            if (!newUser) throw new HttpException('create user failed', 400);

            return { status: 'success', data: { user: newUser } };
        } catch (err) {
            throw err;
        }
    };

    signIn = async (data: IUserDto): Promise<ISignIn> => {
        try {
            const { username, password } = data;

            const user = await this.userModel.findOne({ username });
            if (!user) throw new HttpException('user not found', 404);

            const isCorrect = await bcrypt.compare(password, user.password);
            if (!isCorrect)
                throw new HttpException('password is not correct ', 400);

            return { status: 'success', user };
        } catch (err) {
            throw err;
        }
    };
}
