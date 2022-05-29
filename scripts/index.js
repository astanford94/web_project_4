const modalwindow = document.querySelector(".popup");
const editForm = document.querySelector(".popup__form");
const editButton = document.querySelector(".profile__button-edit");
const closeButton = document.querySelector(".form__exit-button");
/*const AddButton = document.querySelector(".profile__button-add");*/
const profileName = document.querySelector(".profile__name");
const profileJobTitle = document.querySelector(".profile__job-title");
const formInputName = editForm.querySelector(".form__input-name");
const formInputJob = editForm.querySelector(".form__input-job");
let submitBtn = modalwindow.querySelector(".form__button");

function toggleModalVisibility() {
  //if (!modalwindow.classList.contains("popup__is-opened")) {
  //formInputName.value = profileName.textContent;
  //formInputJob.value = profileJobTitle.textContent;
  //}

  modalwindow.classList.toggle("popup__is-opened");
}

function submitForm(event) {
  event.preventDefault();

  profileName.textContent = formInputName.value;
  profileJobTitle.textContent = formInputJob.value;

  toggleModalVisibility();
}

editForm.addEventListener("submit", submitForm);
editButton.addEventListener("click", toggleModalVisibility);
closeButton.addEventListener("click", toggleModalVisibility);
