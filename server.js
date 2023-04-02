const express = require('express');
const path = require('path');

const { graphqlHTTP } = require('express-graphql');
const { makeExecutableSchema } = require('@graphql-tools/schema');
const { loadFilesSync } = require('@graphql-tools/load-files');



const typesArray = loadFilesSync('**/*', {
    extensions: ['graphql'],
  });

const schema = makeExecutableSchema({
    typeDefs: typesArray,
    resolvers: {
        Query: {
            products: async (parent) => {
                console.log("Getting products ...")
                const products = await Promise.resolve(parent.products);
                return products;
            },
            orders: (parent) => {
                console.log("Getting orders ...");
                return parent.orders;
            }
        }
    }
});

const root = {
    products: require('./products/products.model'),
    orders: require('./orders/orders.model')
};

const app = express();

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}));

app.listen(4777, () => {
    console.log("Running GraphQL Server");
});

