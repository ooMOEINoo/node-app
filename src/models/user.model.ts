import { Schema, model } from 'mongoose';

import { IUser } from 'interface/user.interface/user.interface';

const userSchema = new Schema<IUser>({
    username: {
        type: String,
        required: [true, 'user must have a username'],
        unique: true,
    },
    password: {
        type: String,
        required: [true, 'user must have password'],
    },
});

const userModel = model('user', userSchema);

export default userModel;
