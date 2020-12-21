const graphql = require('graphql');

const { GraphQLObjectType, GraphQLString } = graphql;

const BookType = new GraphQLObjectType({
  name: 'Book',
  fileds: () => ({
    id: { Type: GraphQLString },
    name: { type: GraphQLString },
    genre: { type: GraphQLString },
  }),
});
