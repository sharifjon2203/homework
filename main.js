// fetch, AJAX, Axios.AbortController;

// API - application programming interface
// API - https://google.com/

// async function fetchData(url) {
// 	try {
// 		// method => get
// 		const response = await fetch(url);

// 		if (!response.ok) {
// 			console.error(`HTTP-Error:  + ${response.status}`);
// 		}

// 		const data = await response.json();

// 		console.log(response.headers.get("Content-Type"));

// 		return data;
// 	} catch (error) {
// 		throw new Error(error);
// 	}
// }
// (async () => {
// 	const githubURL =
// 		"https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits";
// 	const dummyURL = "https://dummyjson.com/users";

// 	const imgURL = "https://cdn2.thecatapi.com/images/buq.jpg";
// 	const result = await fetchData(imgURL);
// 	console.log(result);
// })();

// (async () => {
// 	try {
// 		const userData = {
// 			firstName: "umar",
// 			lastName: "tursunov",
// 			email: "umar@gmail.com",
// 			password: "qwer1234",
// 			phone: "998945119934",
// 			address: "Toshkent",
// 		};

// 		const response = await fetch("http://localhost:4000/auth/signup", {
// 			method: "POST",
// 			headers: {
// 				"Content-Type": "application/json",
// 			},
// 			body: JSON.stringify(userData),
// 		});

// 		console.log(response.ok, response.status, response.statusText);

// 		const data = await response.json();
// 		console.log(data);
// 	} catch (error) {
// 		console.error(error);
// 	}
// })();

(async () => {
	const URL = "https://4288-213-230-97-152.ngrok-free.app/auth/signin";

	const userData = { email: "xamidullo@gmail.com", password: "qwe123" };

	const options = {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(userData),
	};
	const response = await fetch(URL, options);

	if (!response.ok) {
		console.error(`HTTP ERROR: ${response.status}`);
	}

	const data = await response.json();

	console.log(data);
})();
