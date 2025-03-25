const editButton = document.querySelector(".edit-btn");

editButton.addEventListener("click", (e) => {
  e.preventDefault();

  const id = e.target.id;

  window.location = `http://localhost:4000/todo/${id}`;
});
