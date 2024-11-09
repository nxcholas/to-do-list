import { changeLowBtnColor, changeMedBtnColor, changeHighBtnColor, addProjectToArray, updateProjectHTML, projectArray } from "./getTask";
import { taskArray } from "./getTask";
import { getPriority, addTaskToArray, taskArraytoJSONStr } from "./getTask";
import {submitTaskBtnCloseModal, submitProjectBtnCloseModal} from './modal.js';

// function to clear form content
export function clearTaskForm() {
  const formContainer = document.getElementById("form-container");
  formContainer.replaceChildren();
}

// function to clear submit button
export function clearSubmit () {
  const submitTaskBtn = document.getElementById('submitTaskBtn');
  const submitProjectBtn = document.getElementById('submitProjectBtn');

  if (submitTaskBtn) {
    submitTaskBtn.remove();
  } else if (submitProjectBtn) {
    submitProjectBtn.remove();
  }
}

// render task submit button
export function renderSubmitTaskBtn () {
  clearSubmit();
  // grab main container
  const modalContent = document.getElementById('modal-content');

  // create button
  const submitBtn = document.createElement('input');

  // add attributes and values
  submitBtn.id = 'submitTaskBtn';
  submitBtn.type = 'button';
  submitBtn.value = 'Submit';

  // appending
  modalContent.appendChild(submitBtn);

  // event listeners
  submitBtn.addEventListener('click', addTaskToArray);
  submitBtn.addEventListener('click', updateProjectHTML);
  submitBtn.addEventListener('click', taskArraytoJSONStr);
  submitBtn.addEventListener('click', submitTaskBtnCloseModal);
}

// render project submit button
export function renderSubmitProjectBtn () {
  clearSubmit();
  // grab main container
  const modalContent = document.getElementById('modal-content');
  // create button
  const submitBtn = document.createElement('input');

  // add attributes and values
  submitBtn.id = 'submitProjectBtn';
  submitBtn.type = 'button';
  submitBtn.value = 'Submit';

  // appending
  modalContent.appendChild(submitBtn);

  // add event listeners
  submitBtn.addEventListener('click', addProjectToArray);
  // ***code for json***
  submitBtn.addEventListener('click', submitProjectBtnCloseModal);
}

// render task form
export function updateTaskForm () {
  // clear existing task form and submit button
    clearTaskForm();
    clearSubmit();
    renderSubmitTaskBtn();
    // grab main container and task button and heading
    const formContainer = document.getElementById("form-container");
    const taskBtn = document.getElementById("taskBtn");
    const projectBtn = document.getElementById("projectBtn");
    const modalHeading = document.getElementById('modalHeadingText');

    // form container
    const taskForm = document.createElement('form');
    // section container
    const nameContainer = document.createElement('div');
    const dueDateContainer = document.createElement('div');
    const priorityContainer =document.createElement('div');
    // labels
    const nameLabel = document.createElement('label');
    const dueDateLabel = document.createElement('label');
    const priorityLabel = document.createElement('label');
    // inputs
    const nameInput = document.createElement('input');
    const dueDateInput = document.createElement('input');
    // priority buttons
    const priorityBtnsContainer = document.createElement('div');
    const lowInput = document.createElement('input');
    const medInput = document.createElement('input');
    const highInput = document.createElement('input');

    // assigning classes and id's
    // form
    taskForm.classList.add('form');
    taskForm.id = 'task-form';

    // section containers
    nameContainer.classList.add('labels');
    dueDateContainer.classList.add('labels');
    priorityContainer.classList.add('labels');

    // setting 'for' for labels
    nameLabel.htmlFor = 'task-name';
    dueDateLabel.htmlFor = 'due-date';
    priorityLabel.htmlFor = 'priority';

    // inputs and their types
    nameInput.id = 'task-name-input';
    nameInput.type = 'text';

    dueDateInput.id = 'due-date-input';
    dueDateInput.type = 'date';
    // also values
    priorityBtnsContainer.id = 'priorityBtns';
    lowInput.id = 'lowBtn';
    lowInput.type = 'button';
    lowInput.value = 'low';
    medInput.id = 'medBtn'
    medInput.type = 'button';
    medInput.value = 'medium';
    highInput.id = 'highBtn';
    highInput.type = 'button';
    highInput.value = 'high';

//  Text Content
    modalHeading.textContent = "creating task . . ."
    nameLabel.textContent = 'task name';
    dueDateLabel.textContent = 'due date';
    priorityLabel.textContent = 'priority';

// Appending
    // name container
    nameContainer.appendChild(nameLabel);
    nameContainer.appendChild(nameInput);
    // due date container
    dueDateContainer.appendChild(dueDateLabel);
    dueDateContainer.appendChild(dueDateInput);
    // buttons container
    priorityBtnsContainer.appendChild(lowInput);
    priorityBtnsContainer.appendChild(medInput);
    priorityBtnsContainer.appendChild(highInput);

    priorityContainer.appendChild(priorityLabel);
    priorityContainer.appendChild(priorityBtnsContainer);


    // task form container
    taskForm.append(nameContainer, dueDateContainer, priorityContainer);

    // main form container
    formContainer.appendChild(taskForm);

    // add event listeners to button
    lowInput.addEventListener('click', getPriority);
    lowInput.addEventListener('click', changeLowBtnColor);

    medInput.addEventListener('click', getPriority);
    medInput.addEventListener('click', changeMedBtnColor);

    highInput.addEventListener('click', getPriority);
    highInput.addEventListener('click', changeHighBtnColor);

    // adding event listeners to side buttons
    projectBtn.addEventListener('click', updateProjectForm);
    taskBtn.addEventListener('click', updateTaskForm);
}

// render project form
export function updateProjectForm () {
  // clear the current form
  clearTaskForm();
  clearSubmit();
  renderSubmitProjectBtn();
  // grab main container and project button and header
  const modalHeading = document.getElementById('modalHeadingText');
  const formContainer = document.getElementById("form-container");
  const projectBtn = document.getElementById("projectBtn");

// creating containers
  // form container
  const projectForm = document.createElement('form');
  // name container
  const nameContainer = document.createElement('div');
  const dropdownContainer = document.createElement('div');
  // duedate container
  const dueDateContainer = document.createElement('div');
  const descriptionContainer = document.createElement('div');

// creating elements
  // labels
  const nameLabel = document.createElement('label');
  const dropdownLabel = document.createElement('label');
  const dueDateLabel = document.createElement('label');
  const descriptionLabel = document.createElement('label');

  // inputs
  const nameInput = document.createElement('input');
  const projectNameSelect = document.createElement('datalist');
  const dropdownInput = document.createElement('select');
  const dueDateInput = document.createElement('input');
  const descriptionInput = document.createElement('textarea');

  // placeholders
  const optionPlaceholder = document.createElement('option');

// assigning classes and ids
  // project form
  projectForm.id = 'project-form';
  projectForm.classList.add('form');

  // containers
  nameContainer.classList.add('labels');
  dropdownContainer.classList.add('labels');
  dueDateContainer.classList.add('labels');
  descriptionContainer.classList.add('labels');

  // labels
  nameLabel.htmlFor = 'project-name';
  dropdownLabel.htmlFor = 'project-dropdown';
  dueDateLabel.htmlFor = 'due-date';
  descriptionLabel.htmlFor = 'description';

  // inputs
  nameInput.id = 'project-name-input';
  projectNameSelect.id = 'projectOptions';
  dropdownInput.id = 'project-dropdown-input';
  dueDateInput.id = 'projectDueDate';
  descriptionInput.id = 'project-description';

// text content
  modalHeading.textContent = "create or modify project . . .";
  nameLabel.textContent = 'project name';
  dropdownLabel.textContent = 'add a task';
  optionPlaceholder.value = '';
  optionPlaceholder.setAttribute('disabled', '');
  optionPlaceholder.setAttribute('selected', '');
  optionPlaceholder.textContent = 'select a task . . .';
  dueDateLabel.textContent = 'due date';
  descriptionLabel.textContent = 'description';

  // input types
  nameInput.type = 'text';
  dueDateInput.type = 'date';

  // setting nameInput datalist 
  nameInput.setAttribute('list', 'projectOptions');


// appending
  dropdownInput.appendChild(optionPlaceholder);

  nameContainer.append(nameLabel, nameInput, projectNameSelect);
  dropdownContainer.append(dropdownLabel, dropdownInput);
  dueDateContainer.append(dueDateLabel, dueDateInput);
  descriptionContainer.append(descriptionLabel, descriptionInput);

  projectForm.append(nameContainer, dropdownContainer, dueDateContainer, descriptionContainer);

  formContainer.append(projectForm);

  // nested function to populate dropdown menu
  function populateTaskOptions (options) {
    options.forEach(option => {
      const optionElement = document.createElement('option');
      optionElement.value = option.name;
      optionElement.textContent = option.name;
      dropdownInput.appendChild(optionElement);
    })
  }
  populateTaskOptions(taskArray);

  function populateProjectOptions (options) {
    options.forEach(option => {
      const optionElement = document.createElement('option');
      optionElement.value = option.name;
      optionElement.textContent = option.name;
      projectNameSelect.appendChild(optionElement);
    })
  }
  populateProjectOptions(projectArray);
}