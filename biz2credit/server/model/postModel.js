import { postSchema } from "../schema";

class Post {
  create = (userId, post) => {
    return new Promise(async (res, rej) => {
      const newPost = {
        name: post.name,
        email: post.email,
        phone: post.phone,
        postedBy: userId,
      };
      postSchema.create(newPost, (err, info) => {
        if (err) {
          rej(err);
        } else {
          res(info);
        }
      });
    });
  };

  getAll = (id) => {
    return new Promise(async (res, rej) => {
      postSchema
        .find({ postedBy: id })
        .populate("postedBy", "_id name email phone")
        .exec((err, info) => {
          if (err) {
            rej(err);
          } else {
            res(info);
          }
        });
    });
  };

  update = (postId) => {
    return new Promise(async (res, rej) => {
      postSchema
        .findOne({ _id: id })
        .populate("postedBy", "_id")
        .exec((err, info) => {
          if (err) {
            rej(err);
          } else {
            res(info);
          }
        });
    });
  };

  deletedPost = (id) => {
    return new Promise(async (res, rej) => {
      postSchema
        .findOne({ _id: id })
        .populate("postedBy", "_id")
        .exec((err, info) => {
          if (err) {
            rej(err);
          } else {
            res(info);
          }
        });
    });
  };
}

export default new Post();
