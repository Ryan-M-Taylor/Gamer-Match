const { AuthenticationError } = require('apollo-server-express');

const { User, Post } = require('../models');

const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate(['userFriends', 'posts'])
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate(['userFriends', 'posts'])
    },
    posts: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Post.find(params).sort({ createdAt: -1 });
    },
    post: async (parent, { postId }) => {
      return Post.findOne({ _id: postId });
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate(['userFriends', 'posts'])
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    // friends: async () => {
    //   return Friend.find()
    // },
    // friend: async (parent, { username }) => {
    //   return User.findOne({ username })
    // },
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      console.log("token", token)
      return { token, user };
    },
    addFriend: async (parent, { friendId }, context) => {
      console.log("context user id", context.user._id)
      const updatedUser = await User.findOneAndUpdate(
        { _id: context.user._id },
        { $addToSet: { userFriends: friendId } },
        { new: true }
      );
      return updatedUser;
    },

    updatePreferences: async (parent, { favoriteConsole, coOp, competitive, genres }, context) => {
      const updatedUser = await User.findOneAndUpdate(
        { _id: context.user._id },
        { $addToSet: { favoriteConsole: {$each: favoriteConsole }}},
        { $addToSet: { genres: {$each: genres }}},
        {$set: {coOp: coOp}},
        {$set: {competitive: competitive}},
        { new: true }
      );
      return updatedUser;
    },
    // removeFriend: async (parent, { userId, friendId }, { models }) => {
    //   const user = await models.User.findById(userId);
    //   const friendIndex = user.friends.findIndex(f => f._id.toString() === friendId);
    //   if (friendIndex === -1) {
    //     throw new Error('Friend not found');
    //   }
    //   user.friends.splice(friendIndex, 1);
    //   await user.save();
    //   return { message: 'Friend deleted' };
    // },
    // addFriend: async (parent, { userId, friendId }) => {
    //   try {
    //     // const { userId, friendId } = args; 
    //     // find the user by userId and push the friendId to the userFriends array
    //     const updatedUser = await User.findByIdAndUpdate(userId, { $push: { userFriends: friendId } }, { new: true });
    //     return updatedUser;
    //   } catch (error) {
    //     throw new Error('Error adding friend:', error.message);
    //   }
    // },
    
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);
      console.log("token", token)

      return { token, user };
    },
    addPost: async (parent, { postText }, context) => {
      if (context.user) {
        const post = await Post.create({
          postText,
          postAuthor: context.user.username,
          postChannel: "Xbox"
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { posts: post._id } }
        );

        return post;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    addComment: async (parent, { postId, commentText }, context) => {
      if (context.user) {
        return Post.findOneAndUpdate(
          { _id: postId },
          {
            $addToSet: {
              comments: { commentText, commentAuthor: context.user.username },
            },
          },
          {
            new: true,
            runValidators: true,
          }
        );
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    removePost: async (parent, { postId }, context) => {
      if (context.user) {
        const post = await Post.findOneAndDelete({
          _id: postId,
          postAuthor: context.user.username,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { posts: post._id } }
        );

        return post;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    removeComment: async (parent, { postId, commentId }, context) => {
      if (context.user) {
        return Post.findOneAndUpdate(
          { _id: postId },
          {
            $pull: {
              comments: {
                _id: commentId,
                commentAuthor: context.user.username,
              },
            },
          },
          { new: true }
        );
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },
};

module.exports = resolvers;
