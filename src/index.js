import { ApolloServer, gql } from "apollo-server-express";
import express from "express";
import mongoose from "mongoose";

import { typeDefs } from "./schema/typeDefs";
import { resolvers } from "./resolvers/resolvers";

const asyncStartServer = async () => {
	const app = express();
	// connect to mongodb

	// Apollo server adds middleware to express server so that express server can handle graphql requests
	const server = new ApolloServer({ typeDefs, resolvers });
	server.applyMiddleware({ app });

	await mongoose.connect("mongodb://localhost:27017/graphql_server", {
		useNewUrlParser: true,
		useUnifiedTopology: true
	});

	app.listen({ port: 4000 }, () =>
		console.log(
			`🎉  Server is starting at http://localhost:4000${server.graphqlPath}`
		)
	);
};

asyncStartServer();
