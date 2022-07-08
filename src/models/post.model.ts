import { Schema, model } from 'mongoose';

import { IPost } from '../interface/post.interface/post.interface';

const postSchema = new Schema<IPost>({
    title: {
        type: String,
        required: [true, 'post must have title'],
    },

    body: {
        type: String,
        required: [true, 'post must have body'],
    },
});

const postModel = model('post', postSchema);

export default postModel;
