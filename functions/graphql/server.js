const express = require('express');
const bodyParser = require('body-parser');
const graphqlExpress = require('apollo-server-express').graphqlExpress;
const graphiqlExpress = require('apollo-server-express').graphiqlExpress;
const printSchema = require('graphql/utilities/schemaPrinter').printSchema;
const schema = require('./data/schema').schema;

exports.setupServer = () => {
  const server = express();

  // /api/graphql
  server.use(
    '/graphql',
    bodyParser.json(),
    graphqlExpress({schema, context: {}})
  );

  // /api/graphiql
  server.use(
    '/graphiql',
    graphiqlExpress({endpointURL: '/api/graphql'})
  );

  // /api/schema
  server.use('/schema', (req, res) => {
    res.set('Content-Type', 'text/plain');
    res.send(printSchema(schema));
  });

  // /api
  server.use((req, res) => {
    res.sendfile('./default.html');
  });

  return server
};
