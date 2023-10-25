const bookArr = [];
const bookContainer = document.querySelector("#card-container");
console.log(bookContainer);

toggleModal.modalElements = document.querySelectorAll(".hidden");
toggleModal.display = false;

document.querySelectorAll(".modal-toggle").forEach((element) => {
  element.addEventListener("click", toggleModal);
});

function renderCard(cardObj) {
  // Generate the HTML for a single card
  // Attach it to the card containers

  // Construct Elements
  let newCard = document.createElement("div");
  let title = document.createElement("h3");
  let description = document.createElement("p");
  let buttonDiv = document.createElement("div");
  let deleteBtn = document.createElement("button");
  let readBtn = document.createElement("button");

  // Update element contents
  newCard.setAttribute("data-bookId", bookArr.length);
  title.innerText = cardObj.title;
  description.innerText = cardObj.description;
  deleteBtn.innerText = "Delete";
  readBtn.innerText = cardObj.read ? "Mark Unread" : "Mark Read";

  // Update element classes
  buttonDiv.classList.add("card-btns");
  deleteBtn.classList.add("btn", "btn-delete");
  readBtn.classList.add("btn", "btn-read");

  // Add event listeners
  deleteBtn.addEventListener("click", handleDelete);
  readBtn.addEventListener("click", handleRead);

  // Piece elements together
  buttonDiv.appendChild(deleteBtn);
  buttonDiv.appendChild(readBtn);

  newCard.appendChild(title);
  newCard.appendChild(description);
  newCard.appendChild(buttonDiv);

  bookContainer.appendChild(newCard);
}

function handleRead() {
  // Function to handle card being marked as Read
}

function handleDelete() {
  // Function to handle card being removed from library
}

function toggleModal() {
  // Function to handle modal display
  if (toggleModal.display) {
    toggleModal.display = !toggleModal.display;
    toggleModal.modalElements.forEach((element) => {
      element.classList.add("hidden");
    });
  } else {
    toggleModal.display = !toggleModal.display;
    toggleModal.modalElements.forEach((element) => {
      element.classList.remove("hidden");
    });
  }
}

// Hardcode initial books
let bookObj1 = {
  title: "Book1",
  description: "Description1",
  read: false,
};

let bookObj2 = {
  title: "Book2",
  description: "Description2",
  read: true,
};

bookArr.push(bookObj1);
bookArr.push(bookObj2);

bookArr.forEach((bookObj) => {
  renderCard(bookObj);
  console.log("book!");
});
