function renderCard() {
  // Generate the HTML for a single card
  // Attach it to the card containers
  // Add event listeners to the buttons
}

function handleRead() {
  // Function to handle card being marked as Read
}

function handleDelete() {
  // Function to handle card being removed from library
}

function toggleModal() {
  // Function to handle modal display
  console.log("yay");
  if (toggleModal.display) {
    console.log("remove hidden");
    toggleModal.modalElements.forEach((element) => {
      element.classList.add("hidden");
    });
  } else {
    console.log("add hidden");
    toggleModal.modalElements.forEach((element) => {
      element.classList.remove("hidden");
    });
  }
}

toggleModal.modalElements = document.querySelectorAll(".modal");
toggleModal.display = false;

document
  .querySelector("#add-new-button")
  .addEventListener("click", toggleModal);
