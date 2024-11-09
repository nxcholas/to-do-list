import { updateTaskForm, clearTaskForm } from "./modaltabs";

const modal = document.getElementById('modal');
const openModal = document.getElementById('openModalBtn');
const closeModal = document.getElementById('closeModalBtn');
const submitTaskBtn = document.getElementById('submitTaskBtn');

export function openModalBox () {
    openModal.addEventListener('click', () => {
        updateTaskForm();
        modal.showModal();
    })
}

export function closeModalBox () {
    closeModal.addEventListener('click', () => {
        modal.close();
        clearTaskForm();
    })
}

export function submitTaskBtnCloseModal () {
    modal.close();
}

export function submitProjectBtnCloseModal () {
    modal.close();
}