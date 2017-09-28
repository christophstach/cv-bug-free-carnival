import { makeExecutableSchema } from 'graphql-tools';
import { resolveFunctions } from './resolvers';


const graphQlschema = `
type Author {
  id: Int! # the ! means that every author object _must_ have an id
  firstName: String
  lastName: String
  posts: [Post] # the list of Posts by this author
}

type Post {
  id: Int!
  title: String
  author: Author
  votes: Int
}

# the schema allows the following query:
type Query {
  posts: [Post]
  author(id: Int!): Author
}

# this schema allows the following mutation:
type Mutation {
  upvotePost (
    postId: Int!
  ): Post
}
`;


export const schema = makeExecutableSchema({
  typeDefs: graphQlschema,
  resolvers: resolveFunctions
});



