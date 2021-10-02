const { User } = require("../models");
const Character = require("../models/characters");
const Dungeon = require("../models/dungeons");

const resolvers = {
    Query: {
      users: async () => {
        return User.find().select('-__v -password');
      }
    },
    Mutation: {
        addDungeon: async(parent, args) =>{
            const dungeon = await Dungeon.create(args);
            return dungeon;
        },
        addCharacter: async(parent,args) =>{
            const character = await Character.create(args);
            return character;
        }
    }
 };
  

module.exports = resolvers;