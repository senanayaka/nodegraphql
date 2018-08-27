import express from 'express';
import bodyPaser from 'body-parser';
import { graphqlExpress } from 'apollo-server-express';
import { makeExecutableSchema } from 'graphql-tools';
import mongoose from 'mongoose';

import typeDefs from './schema';
import resolvers from './resolvers';

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

mongoose.connect('mongodb://localhost/test');

const Cat = mongoose.model('Cat', { name: String });

const PORT = 3000;
const app = express();
app.use('/graphql', bodyPaser.json(), graphqlExpress({ schema, context: { Cat } }));
app.listen(PORT);
