const { gql } = require('apollo-server');

module.exports = gql`
  type User {
    id: ID!
    email: String!
    token: String!
    username: String!
    createdAt: String!
    country: String!
    buisness: String!
    plan: String!
  }
  input RegisterInput {
    username: String!
    password: String!
    confirmPassword: String!
    email: String!
    country: String!
    buisness: String!
    plan: String!
  }
  type Data {
    name: String
    number: String
    check:String
  }
  type Query {
    post:User
    data:Data
  }
  input drag {
    name: String!
    content: String!
    img: String!
  }
  type dragss {
    name: String!
    content: String!
    img: String!
  }
  type Mutation {
    register(registerInput: RegisterInput): User!
    login(username: String!, password: String!): User!
    drags(draging: [drag]): [dragss]
  }
  
`;
