import { Modal } from "bootstrap";

const modalElement = document.getElementById('exampleModal');
const exitButton = document.getElementById('exitButton');
const cancelButton = document.getElementById('cancelButton');

const bootstrapModal = new Modal(modalElement);

modalElement.addEventListener('show.bs.modal', function () {
    const recipient = modalElement.getAttribute('data-whatever');
    const modalTitle = modalElement.querySelector('.modal-title');
    const modalInput = modalElement.querySelector('.modal-body input');

    if (modalTitle && modalInput) {
        modalTitle.innerText = '¿Estás seguro de que quieres cancelar el registro?';
        modalInput.value = recipient;
    }
});

cancelButton.addEventListener('click', function () {
    bootstrapModal.show();
});

exitButton.addEventListener('click', function () {
    window.location.href = './index.html'; 
});