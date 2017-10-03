import { addMockFunctionsToSchema, makeExecutableSchema } from 'graphql-tools';
import { types } from './types';
import { queries } from './queries';

const executableSchema = makeExecutableSchema({
  typeDefs: [types, queries]
});

addMockFunctionsToSchema({
  schema: executableSchema,
  mocks: {
    Date: () => new Date()
  }
});

export const schema = executableSchema;



