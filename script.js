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

toggleModal.modalElements = document.querySelectorAll(".modal");
toggleModal.display = false;

document.querySelectorAll(".modal-toggle").forEach((element) => {
  element.addEventListener("click", toggleModal);
});
