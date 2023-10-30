const bookContainer = document.getElementById("card-container");
const addBookForm = document.getElementById("new-book-form");
addBookForm.addEventListener("submit", handleSubmit);

toggleModal.modalElements = document.querySelectorAll(".hidden");
toggleModal.modalControllers = document.querySelectorAll(".modal-toggle");
toggleModal.display = false;
toggleModal.modalControllers.forEach((element) => {
  element.addEventListener("click", toggleModal);
});

class Book {
  constructor(title, description) {
    (this.title = title),
      (this.description = description),
      (this.isRead = false);
  }
}

function renderCard(cardObj) {
  const markRead = () => {
    status.innerText = `Status: ${readBtn.value == "read" ? "Read" : "Unread"}`;
    readBtn.innerText = `${
      readBtn.value == "read" ? "Mark Unread" : "Mark Read"
    }`;
    readBtn.setAttribute("value", readBtn.value == "read" ? " unread" : "read");
  };

  const delCard = () => {
    newCard.remove();
  };

  // Construct Elements
  let newCard = document.createElement("div");
  let title = document.createElement("h3");
  let description = document.createElement("p");
  let status = document.createElement("p");
  let buttonDiv = document.createElement("div");
  let deleteBtn = document.createElement("button");
  let readBtn = document.createElement("button");

  // Update element contents
  title.innerText = cardObj.title;
  description.innerText = cardObj.description;
  status.innerText = `Status: ${cardObj.isRead ? "Read" : "Unread"}`;
  deleteBtn.innerText = "Delete";
  readBtn.innerText = cardObj.isRead ? "Mark Unread" : "Mark Read";

  // Update element classes
  status.classList.add("status");
  buttonDiv.classList.add("card-btns");
  deleteBtn.classList.add("btn", "btn-delete");
  readBtn.classList.add("btn", "btn-read");
  readBtn.setAttribute("value", "read");

  // Add event listeners
  deleteBtn.addEventListener("click", delCard);
  readBtn.addEventListener("click", markRead);

  // Piece elements together
  buttonDiv.appendChild(deleteBtn);
  buttonDiv.appendChild(readBtn);

  newCard.appendChild(title);
  newCard.appendChild(description);
  newCard.appendChild(status);
  newCard.appendChild(buttonDiv);

  bookContainer.appendChild(newCard);
}

function createNewBook(title, description) {
  let newBook = new Book(title, description);
  renderCard(newBook);
}

function handleSubmit(event) {
  event.preventDefault();
  let title = document.getElementById("book-title").value;
  let description = document.getElementById("book-desc").value;
  createNewBook(title, description);
  toggleModal();
  addBookForm.reset();
}

function toggleModal() {
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
