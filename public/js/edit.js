const editButton = document.querySelector(".edit-btn");
// alert("alert ishladi 1")

editButton.addEventListener("click", (e) => {
  e.preventDefault();

  const id = e.target.id;
  // alert("alert ishladi 2")
  //     bu yerda shu endpointga post request borish kerak lekin oddiy linkga o'tish get so'rovida boradi
  window.location = `http://localhost:4000/todo/${id}`;
});
