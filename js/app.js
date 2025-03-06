const inputElement = document.querySelector("#search");
const buttunElement = document.querySelector("#search-btn");
const userDetailelement = document.querySelector("#user-detail");

buttunElement.addEventListener("click", async (e) => {
	const userData = await fetchUserDetail(inputElement.value);
	render(userData);
});

function render(user) {
	userDetailelement.innerHTML = "";
	const image = document.createElement("img");
	image.src = user.avatar_url;

	userDetailelement.appendChild(image);
}

async function fetchUserDetail(userName) {
	const url = `https://api.github.com/users/${userName}`;

	const response = await fetch(url);

	if (!response.ok) {
		throw new Error("rejected response");
	}

	const userData = await response.json();

	console.log(userData);
	return userData;
}
