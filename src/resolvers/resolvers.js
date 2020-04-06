import { User } from "../models/User";

export const resolvers = {
	Query: {
		hello: () => "Hello, Chau",
		users: () => User.find()
	},

	Mutation: {
		createUser: async (_, { username, email, password }) => {
			const user = new User({
				username,
				email,
				password
			});
			await user.save();
			return user;
		}
	}
};
