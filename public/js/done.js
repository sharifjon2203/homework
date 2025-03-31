const doneButton = document.querySelector(".done-btn");

doneButton.addEventListener("click", (e) => {
  e.preventDefault();

  const id = e.target.id;

  fetch(`http://localhost:4000/todo/done/${id}`, { method: "GET" })
    .then((data) => {
      if (!data.ok) {
        alert("not found");
        return;
      }

      alert("Done");
      window.location = "http://localhost:4000";
    })
    .catch((e) => {
      alert(e.message);
    });
});
