import { personResolvers } from './resolvers/Person';

export const resolvers = {
  Query: {
    ...personResolvers.queries
  },
  ...personResolvers.types
};
