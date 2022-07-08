import HttpException from 'utils/http.exception';

export interface IPost {
    title: string;
    body: string;
}
export interface IGetAllPosts {
    status: string;
    result: number;
    data: {
        posts: IPost[] | null;
    };
    err?: HttpException;
}

export interface IGetOnePost {
    status: string;
    data: {
        post: IPost | null;
    };
    err?: HttpException;
}

export interface IPostDto {
    body: string;
    title: string;
}

export interface ICreatePost {
    status: string;
    data: {
        post: IPost | null;
    };
    err?: HttpException;
}

export type IUpdatePostDto = Partial<IPostDto>;

export interface IUpdatePost {
    status: string;
    data: {
        post: IPost | null;
    };
    err?: HttpException;
}

export interface IDeletePost {
    status: string;
    err?: HttpException;
}
