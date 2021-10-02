const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    username: String
    password: String
  }
  type Dungeon{
    name: String, 
    user: [User],
    characters: [Character]
    
  }
  type Character{
   name: String,
   class: String,
   dungeon: [Dungeon]
  }
  type Query {
    users: [User]
    dungeon: [Dungeon]
    character: [Character]
  }

  type Mutation {
    addDungeon(title: String!, size: String!): Dungeon
    addCharacter(title: String!, role: String!): Character
  }
`;

module.exports = typeDefs;