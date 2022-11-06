const Post = require('../models/posts.js');
const fs = require('fs');

module.exports = class API {
    // fetch all journals
    static async fetchAllJournals(req, res) {
        try {
            const posts = await Post.find();
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
        const post = req.body;
        const imagename = req.file.filename;
        post.image = imagename;
        try {
            await Post.create(post)
            res.status(201).json({ message: "Successfully create new Journal" })
        } catch (error) {
            res.status(400).json({ message: error.message })
        }
    }

    static async manageJournals(req, res) {
        const id = req.params.id;
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