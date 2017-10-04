import { addMockFunctionsToSchema, makeExecutableSchema } from 'graphql-tools';
import { types } from './types';
import { queries } from './queries';
import { resolvers } from './resolvers';

const executableSchema = makeExecutableSchema({
  typeDefs: [types, queries],
  resolvers: resolvers
});

/*
addMockFunctionsToSchema({
  schema: executableSchema,
  mocks: {
    Date: () => new Date()
  }
});
*/

export const schema = executableSchema;



