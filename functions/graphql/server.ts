import * as express from 'express';
import * as bodyParser from 'body-parser';
import { graphiqlExpress, graphqlExpress } from 'apollo-server-express';
import { printSchema } from 'graphql/utilities/schemaPrinter';
import { schema } from './data/schema';
import { environment } from '../environment';
import * as fs from 'fs';


export const setupServer = () => {
  const server = express();

  fs.writeFileSync(__dirname + '/schema.json', printSchema(schema));

  // /api/graphql
  server.use(
    '/graphql',
    bodyParser.json(),
    graphqlExpress({ schema, context: {} })
  );

  // /api/graphiql
  server.use(
    '/graphiql',
    graphiqlExpress({ endpointURL: environment.development ? '/graphql' : '/api/graphql' })
  );

  // /api/schema
  server.use('/schema', (req, res) => {
    res.set('Content-Type', 'text/plain');
    res.send(printSchema(schema));
  });


  return server;
};
