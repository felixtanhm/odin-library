const bookArr = [];
const bookContainer = document.querySelector("#card-container");

toggleModal.modalElements = document.querySelectorAll(".hidden");
toggleModal.display = false;

document.querySelectorAll(".modal-toggle").forEach((element) => {
  element.addEventListener("click", toggleModal);
});
document
  .querySelector("#new-book-form")
  .addEventListener("submit", handleSubmit);

class Book {
  constructor(title, description, isRead) {
    (this.title = title),
      (this.description = description),
      (this.isRead = false);
  }

  markRead() {
    this.isRead = !this.isRead;
  }
}

function renderCard(cardObj) {
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
  readBtn.innerText = cardObj.isRead ? "Mark Unread" : "Mark Read";

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

function createNewBook(title, description) {
  let newBook = new Book(title, description);
  bookArr.push(newBook);
  renderCard(newBook);
}

function handleRead() {
  // Function to handle card being marked as Read
}

function handleDelete() {
  // Function to handle card being removed from library
}

function handleSubmit(event) {
  event.preventDefault();
  let title = document.getElementById("book-title").value;
  let description = document.getElementById("book-desc").value;
  createNewBook(title, description);
  toggleModal();
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
createNewBook("Test3", "Desc1", true);
createNewBook("Test2", "Desc2", false);
