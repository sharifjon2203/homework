import todos from "../db/todos.json" with { type: "json" };

export const todoController = {
	findAll: (req, res, next) => {
		const query = req.query;

		const { limit, page } = query;

		const start = (+page - 1) * +limit;
		//page =1 limit = 5
		//start = 0
		//end = 5

		//page =2 limit = 5
		//start = 5
		//end = 10
		const end = +start + +limit;

		const paginatedTodos = todos.slice(start, end);

		console.log(paginatedTodos.length, { start, end });
		if (query.limit && query.page) {
			return res.json(paginatedTodos);
		}

		// if (query.completed) {
		// 	const completed = query.completed === "true";
		// 	const filteredTodos = todos.filter(
		// 		(todo) => todo.completed === completed,
		// 	);
		// 	return res.json(filteredTodos);
		// }

		// if (query.title) {
		// 	const title = query.title;
		// 	const filteredTodos = todos.filter((todo) => todo.title.includes(title));
		// 	return res.json(filteredTodos);
		// }
		res.json(todos);
	},
	findOne: (req, res, next) => {},
	create: (req, res, next) => {},
	update: (req, res, next) => {},
	delete: (req, res, next) => {},
};
