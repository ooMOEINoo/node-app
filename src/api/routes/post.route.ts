import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';

import { PostService } from '../../services/post.service';
import postModel from '../../models/post.model';
import {
    ICreatePost,
    IDeletePost,
    IGetAllPosts,
    IGetOnePost,
    IPostDto,
    IUpdatePost,
    IUpdatePostDto,
} from '../../interface/post.interface/post.interface';
import { protect } from '../../middleware/auth.middleware';

const route = Router();
const postService = new PostService(postModel);

export default (app: Router) => {
    app.use('/posts', route);

    // get all posts
    route.get('/', async (req, res, next) => {
        try {
            const result: IGetAllPosts = await postService.getAllPosts();
            res.status(StatusCodes.OK).send(result);
        } catch (err) {
            return next(err);
        }
    });

    // create post
    route.post('/', protect, async (req, res, next) => {
        try {
            const result: ICreatePost = await postService.createPost(
                req.body as IPostDto
            );
            res.status(StatusCodes.OK).send(result);
        } catch (err) {
            return next(err);
        }
    });

    // get one post
    route.get('/:id', async (req, res, next) => {
        try {
            const result: IGetOnePost = await postService.getOnePost(
                req.params.id
            );
            res.status(StatusCodes.OK).send(result);
        } catch (err) {
            return next(err);
        }
    });

    // update post
    route.put('/:id', protect, async (req, res, next) => {
        try {
            const result: IUpdatePost = await postService.updatePost(
                req.params.id,
                req.body as IUpdatePostDto
            );
            res.status(StatusCodes.OK).send(result);
        } catch (err) {
            return next(err);
        }
    });

    //  delete post
    route.delete('/:id', protect, async (req, res, next) => {
        try {
            const result: IDeletePost = await postService.deletePost(
                req.params.id
            );
            res.status(StatusCodes.OK).send(result);
        } catch (err) {
            return next(err);
        }
    });
};
