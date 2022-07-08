import { Model, isValidObjectId } from 'mongoose';

import {
    IPost,
    ICreatePost,
    IDeletePost,
    IGetAllPosts,
    IGetOnePost,
    IPostDto,
    IUpdatePost,
} from '../interface/post.interface/post.interface';
import HttpException from '../utils/http.exception';

export class PostService {
    constructor(private readonly postModel: Model<IPost>) {
        this.postModel = postModel;
    }

    getAllPosts = async (): Promise<IGetAllPosts> => {
        try {
            const posts: IPost[] = await this.postModel.find();

            if (!posts) throw new HttpException('not found any post', 404);

            return { status: 'success', result: posts.length, data: { posts } };
        } catch (err) {
            throw err;
        }
    };

    getOnePost = async (id: string): Promise<IGetOnePost> => {
        try {
            if (!isValidObjectId(id))
                throw new HttpException('id is not valid', 400);
            const post: IPost | null = await this.postModel.findById(id);

            if (!post) throw new HttpException('not found post', 404);

            return { status: 'success', data: { post } };
        } catch (err) {
            throw err;
        }
    };

    createPost = async (data: IPostDto): Promise<ICreatePost> => {
        try {
            const newPost: IPost = await this.postModel.create(data);

            if (!newPost) throw new HttpException('create failed', 400);

            return { status: 'success', data: { post: newPost } };
        } catch (err) {
            throw err;
        }
    };

    updatePost = async (
        id: string,
        data: Partial<IPostDto>
    ): Promise<IUpdatePost> => {
        try {
            const post: IPost | null = await this.postModel.findByIdAndUpdate(
                id,
                data,
                {
                    new: true,
                    runValidators: true,
                }
            );

            if (!post) throw new HttpException('update failed', 400);

            return { status: 'success', data: { post } };
        } catch (err) {
            console.log(err);
            throw err;
        }
    };

    deletePost = async (id: string): Promise<IDeletePost> => {
        try {
            const post: IPost | null = await this.postModel.findByIdAndDelete(
                id
            );

            if (!post) throw new HttpException('delete failed', 400);

            return { status: 'success' };
        } catch (err) {
            throw err;
        }
    };
}
