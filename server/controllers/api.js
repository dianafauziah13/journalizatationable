const Post = require('../models/posts.js');
const fs = require('fs');
const User = require('../models/user');
const posts = require('../models/posts.js');

module.exports = class API {
    // fetch all journals
    static async fetchAllJournals(req, res) {
        const token = req.headers.token;
        try {
            const user = await User.findOne({token:token});
            const posts = await Post.find({user_id:user.id});
            res.status(200).json(posts);
        } catch (error) {
            res.status(404).json({ message: error.message })
        }
    }

    static async fetchPostByID(req, res) {
        const id = req.params.id;
        try {
            const post = await Post.findById(id);
            res.status(200).json(post);
        } catch (error) {
            res.status(404).json({ message: error.message })
        }
    }

    static async createJournals(req, res) {
        const token = req.headers.token;
        const post = req.body;
        const user = await User.findOne({token:token});

        const imagename = req.file.filename;
        post.image = imagename;
        post.user_id = user.id;
        console.log(post)
        try {
            await Post.create(post)
            res.status(201).json({ message: "Successfully create new Journal" })
        } catch (error) {
            res.status(400).json({ message: error.message })
        }
    }

    static async manageJournals(req, res) {
        const id = req.params.id;
        const token = req.headers.token;
        const user = await User.findOne({token:token});

        let new_image = "";
        if (req.file) {
            new_image = req.file.filename;
            try {
                fs.unlinkSync("./uploads/" + req.body.old_image);
            } catch (error) {
                console.log(error.message)
            }
        } else {
            new_image = req.body.old_image;
        }

        const newPost = req.body;
        newPost.image = new_image;

        try {
            // dipisah, find update
            await Post.findByIdAndUpdate(id, newPost);
            res.status(200).json({ message: "Successfully update your Journal" })
        } catch (error) {
            res.status(404).json({ message: error.message })
        }
    }

    static async deleteJournals(req, res) {
        const id = req.params.id;
        try {
            const result = await Post.findByIdAndDelete(id);
            if (result.image != '') {
                try {
                    fs.unlinkSync('./uploads/'+result.image);
                } catch (error) {
                    console.log(error)
                }
            }
            res.status(200).json({ message: "Successfully Delete your Journal" })
        } catch (error) {
            res.status(404).json({ message: error.message })
        }
    }
}   