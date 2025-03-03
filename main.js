const fromElement = document.querySelector("#search-form");
const todoFormElement = document.querySelector("#todo-form");
const todoLists = document.querySelector("#todo-list");
let todoInputElement = document.querySelector("#todo-input");
let searchInputElement = document.querySelector("#search-input");

const searchSesultList = document.querySelector("#search-result");
const todoList = [
	{
		name: "ali",
		region: "uz",
		religin: "muslim",
	},
];

fromElement.addEventListener("submit", function a(e) {
	e.preventDefault();

	const value = searchInputElement.value;

	const data = todoList.filter((todo) => todo === value);

	for (const item of data) {
		const liElement = document.createElement("li");
		liElement.textContent = item;
		searchSesultList.append(liElement);
	}

	// const data = {};
	// const fromMap = new FormData(this);
	// for (const [key, value] of fromMap) {
	// 	data[key] = value;
	// }
});

todoFormElement.addEventListener("submit", function a(e) {
	e.preventDefault();

	const liElement = document.createElement("li");
	liElement.textContent = todoInputElement.value;
	todoLists.appendChild(liElement);
	todoList.push(todoInputElement.value);

	todoInputElement.value = "";
});
