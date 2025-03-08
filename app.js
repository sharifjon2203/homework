(() => {
	const controller = new AbortController();
	const response = fetch("https://4288-213-230-97-152.ngrok-free.app/test", {
		signal: controller.signal,
	});

	console.log(response);

	setTimeout(() => {
		controller.abort();
	}, 5000);
})();
