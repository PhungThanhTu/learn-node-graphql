const express = require('express');
const { buildSchema } = require('graphql');
const { graphqlHTTP } = require('express-graphql');

const schema = buildSchema(`
    type Query {
        description: String,
        price: Float
    }
`);

const root = {
    description: "Basic hat",
    price: 10.5
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

