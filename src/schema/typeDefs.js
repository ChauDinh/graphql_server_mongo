import { gql } from "apollo-server-express";

export const typeDefs = gql`
	type Query {
		hello: String!
		users: [User!]!
	}

	type User {
		id: ID!
		username: String!
		email: String!
		password: String!
	}

	type Mutation {
		createUser(
			username: String!
			email: String!
			password: String!
		): User!
	}
`;
