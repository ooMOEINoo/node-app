export interface IUser {
    username: string;
    password: string;
}

export interface IUserDto {
    username: string;
    password: string;
}

export interface ISignUp {
    status: string;
    data: {
        user: IUser;
    };
}

export interface ISignIn {
    status: string;
    user: IUser;
}

export interface ISignInDto {
    username: string;
    password: string;
}
