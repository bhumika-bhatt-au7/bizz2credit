import { Post } from "../model";
import { postSchema } from "../schema";

const postController = {
  create: async (req, res) => {
    try {
      const post = Post.create(req.user, req.body);
      if (post) {
        res.status(200).send({ message: "User created successfully" });
      }
    } catch (error) {
      res.status(400).send(error._message);
    }
  },

  getAll: async (req, res) => {
    try {
      const posts = await Post.getAll(req.user._id);
      res.status(200).json(posts);
    } catch (error) {
      res.status(400).send(error._message);
    }
  },

  update: async (req, res) => {
    try {
      const post = await Post.update(req.params.id);
      if (!post) {
        return res.status(404).json({ message: "Post not found" });
      }
      if (post.postedBy._id.toString() === req.user._id.toString()) {
        const newPost = {
          name: "req.body.name",
          email: "req.body.email",
          phone: "req.body.phone",
        };
        const updatePost = await postSchema.create(newPost);
        updatePost.save();
        return res.json(updatePost);
      } else {
        console.log("COuld not update , try again");
      }
    } catch (error) {
      res.status(400).send(error._message);
    }
  },

  delete: async (req, res) => {
    try {
      const post = await Post.delete(req.params.id);
      if (!post) {
        return res.status(404).json({ message: "Post not found" });
      }
      if (post.postedBy._id.toString() === req.user._id.toString()) {
        await post.remove();
        return res.json(post);
      } else {
        console.log("Not deleted");
      }
    } catch (error) {
      res.status(400).send(error._message);
    }
  },
};

export default postController;
