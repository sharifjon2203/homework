const addTaskBtn = document.querySelector("#add-task_btn");
const taskInputElement = document.querySelector("#task-input");
const taskListContainer = document.querySelector(".task-list_container");

const todoList = [
	{
		title: "To study React fundamentals",
		id: 12,
		completed: false,
	},
	{
		title: "To study javascript fundamentals",
		id: 11,
		completed: false,
	},
	{
		title: "To study nodejs fundamentals",
		id: 14,
		completed: false,
	},
];

function render() {
	taskListContainer.innerHTML = "";
	for (const todo of todoList) {
		const divContainer = document.createElement("div");
		const divTitle = document.createElement("div");
		divTitle.textContent = todo.title;

		const taskIconContainerDiv = document.createElement("div");
		const taskIconDiv = document.createElement("div");
		taskIconDiv.classList.add("task-icon");
		const doneBtn = document.createElement("button");
		const doneImg = document.createElement("img");
		doneImg.src = "./images/true.png";
		doneBtn.appendChild(doneImg);
		doneImg.setAttribute("id", todo.id);
		doneBtn.addEventListener("click", function event(e) {
			console.log(e.target.id);
		});
		const deleteBtn = document.createElement("button");
		const deleteImg = document.createElement("img");
		deleteImg.src = "./images/delete.png";
		deleteBtn.appendChild(deleteImg);
		deleteImg.setAttribute("id", todo.id);

		deleteBtn.addEventListener("click", function event(e) {
			const targetId = e.target.id;
			const index = todoList.findIndex((todo) => todo.id === +targetId);

			todoList.splice(index, 1);
			render();
		});
		taskIconDiv.appendChild(doneBtn);
		taskIconDiv.appendChild(deleteBtn);

		taskIconContainerDiv.appendChild(taskIconDiv);

		divContainer.appendChild(divTitle);
		divContainer.appendChild(taskIconContainerDiv);

		taskListContainer.append(divContainer);
	}
}

render();

addTaskBtn.addEventListener("click", function a(e) {
	const id = todoList.length + 1;
	const todo = {
		title: taskInputElement.value,
		id,
		completed: false,
	};

	todoList.push(todo);

	render();

	taskInputElement.value = "";
});
