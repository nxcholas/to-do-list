import { generateCalendar } from "./populateCalendar.js";
import { DropdownBtn } from "./populateProjDropdown.js";

let priorityValue = null;
let taskName;
let dueDate;
let taskArrayVal = null;
let completion = 'incomplete';
export let taskArray = [];
export let projectArray = [];
export const tasksContainer = document.getElementById('tasks-container');
export const projectContainer = document.getElementById('project-container');

// Acessing CSS Color Variables
const rootStyles = getComputedStyle(document.documentElement);
const lightgreen = rootStyles.getPropertyValue('--accent-lightgreen');
const darkgreen = rootStyles.getPropertyValue('--accent-darkgreen');

// project class - parent
export class Project {
    constructor(id, name, tasks, completion, date, description) {
        this.id = id;
        this.name = name;
        this.tasks = [];
        this.completion = completion;
        this.date = date;
        this.description = description;
    }
}

// task class - child
export class Task {
    constructor(id, name, date, priority, completion) {
        this.id = id;
        this.name = name;
        this.date = date;
        this.priority = priority;
        this.completion = completion;
    }
}

// getting values

export function getTaskName() {
    taskName = document.getElementById("task-name-input").value;
}

export function getDueDate() {
    dueDate = document.getElementById("due-date-input").value;
}

export function getPriority(event) {
    priorityValue = event.target.value;
    console.log("Priority set to: " + priorityValue);
}

export function getProjectName() {
    let projectName = document.getElementById('project-name-input').value;

    return projectName;
}

export function getTaskValue() {
    // initialize select variable
    let task = document.getElementById('project-dropdown-input');

    // initialize select value's name to compare
    let taskName = task.value;

    // algo to compare object in task array that matches object selected
    let selectedTask = taskArray.find(obj => obj.name === taskName) || console.log("no task inputted");

    return selectedTask;
}

export function getProjectDueDate () {
    const dueDate = document.getElementById('projectDueDate').value;

    return dueDate;
}

export function getProjectDescription () {
    const description = document.getElementById("project-description").value;

    return description;
}

export function changeLowBtnColor () {
    //  grab button elements
    const lowBtn = document.getElementById("lowBtn");
    const medBtn = document.getElementById("medBtn");
    const highBtn = document.getElementById("highBtn");
    //  reset other button styles
    medBtn.style.backgroundColor = '';
    medBtn.style.border = '';
    highBtn.style.backgroundColor = '';
    highBtn.style.border = '';
    //  change button styles
    lowBtn.style.backgroundColor = 'var(--accent-lightgreen)';
    lowBtn.style.border = '2px dashed var(--accent-darkgreen)';
}

export function changeMedBtnColor () {
    //  grab button elements
    const lowBtn = document.getElementById("lowBtn");
    const medBtn = document.getElementById("medBtn");
    const highBtn = document.getElementById("highBtn");
     //  reset other button styles
     lowBtn.style.backgroundColor = '';
     lowBtn.style.border = '';
     highBtn.style.backgroundColor = '';
     highBtn.style.border = '';
    //  change button styles
    medBtn.style.backgroundColor = 'gold';
    medBtn.style.border = '2px dashed goldenrod';
}

export function changeHighBtnColor () {
    //  grab button elements
    const lowBtn = document.getElementById("lowBtn");
    const medBtn = document.getElementById("medBtn");
    const highBtn = document.getElementById("highBtn");
     //  reset other button styles
     lowBtn.style.backgroundColor = '';
     lowBtn.style.border = '';
     medBtn.style.backgroundColor = '';
     medBtn.style.border = '';
    //  change button styles
    highBtn.style.backgroundColor = 'red';
    highBtn.style.border = '2px dashed firebrick';
}

export function addTaskToArray() {
    // task properties
    getTaskName();
    getDueDate();
    const taskId = Date.now();
    const completion = "incomplete";

    const newTask = new Task(taskId, taskName, dueDate, priorityValue, completion);

    taskArray.push(newTask);
    console.log("Task Array after adding new task: ", taskArray);

//  refresh taskHTML
    updateHTML();
// Save the updated task array to local storage
    taskArraytoJSONStr(); 
}

export function addProjectToArray() {
// getting values
let name = getProjectName(); // Get project name from datalist input
let taskValue = getTaskValue();
let dueDate = getProjectDueDate();
let description = getProjectDescription();

// Find if the project already exists in projectArray
let existingProject = projectArray.find(project => project.name === name);

if (existingProject) {
    // Project exists, update its properties
    if (taskValue) { // Check if taskValue is defined and not empty
        existingProject.tasks.push(taskValue); // Only add if taskValue is valid
    }  // Modify the tasks array
    existingProject.date = dueDate;      
    existingProject.description = description;   description
    console.log(`Updated Project: `, existingProject);
} else {
    // Project does not exist, create a new project
    let id = Date.now();
    let completion = "incomplete";
    let newProject = new Project(id, name, taskValue, completion, dueDate, description);
    if (taskValue) { // Check if taskValue is defined and not empty
        newProject.tasks.push(taskValue); // Only add if taskValue is valid
    }
    projectArray.push(newProject);
    console.log(`New Project Added: `, newProject);
}

// Update the project array in the DOM and local storage
updateProjectHTML();
projectArraytoJSONStr();
}

export function updateProjectHTML() {
    console.log("Updating HTML with current project array:", projectArray);
    // reset task container then fill with whole array
    projectContainer.innerHTML = '';

    for (let i = 0; i < projectArray.length; i++){
        // grab projects from projectArray
        const projectData = projectArray[i];
        if (!projectData) {
            console.error(`projectArray [${i}] is null or undefined`);
            continue;
        }
    //  creating elements
    // project container
    const project = document.createElement('div');

    // project-tasks-container
    const tasksContainer = document.createElement('div');

    // project title section container
    const projectTitleSection = document.createElement('div');
    const projectHeadingText = document.createElement('div');
    const projectHeadingButtons = document.createElement('div');
    const projectTitle = document.createElement('h2');
    const dropdownBtn = document.createElement('button');
    const removeProjectBtn = document.createElement('button');

    // project description container
    const descriptionContainer = document.createElement('div');
    const descriptionText = document.createElement('p');

    // project button container
    const projectBtnChecklist = document.createElement('div');
    const completedBtn = document.createElement('button');
    const dueDateBtn = document.createElement('button');

// adding classes and attributes
    // project title section
    project.classList.add('projects');
    projectTitleSection.classList.add('projectTitleSection');
    projectHeadingText.classList.add('project-heading-text');
    projectHeadingButtons.classList.add('project-heading-buttons');
    projectTitle.classList.add('project-title');
    dropdownBtn.classList.add('dropdownBtn');
    removeProjectBtn.classList.add('removeProjectBtn');

    // description section
    descriptionContainer.classList.add('description-container');
    descriptionText.classList.add('description-text');

    // buttons section
    projectBtnChecklist.classList.add('projectBtnChecklist');
    completedBtn.classList.add('btnCheck');
    completedBtn.classList.add('completedBtn');
    dueDateBtn.classList.add('dateBtn');

    // project-tasks id
    tasksContainer.setAttribute('id', 'project-tasks-container');
    

    // default project settings
    projectTitle.innerHTML = projectData.name || 'No Project Name';
    dropdownBtn.innerHTML = '&#9660;';
    removeProjectBtn.innerHTML = 'x'
    descriptionText.innerHTML = projectData.description || 'No Description';
    dueDateBtn.innerHTML = projectData.date || 'No Due Date';
    completedBtn.textContent = projectData.completion;

    // adding dataset id's
    project.dataset.id = projectData.id || '';
    removeProjectBtn.dataset.id = projectData.id || '';

// add styling
    // duedate
    dueDateBtn.style.borderColor = '#7d4eff';

    if (projectData.completion === 'incomplete'){
        completedBtn.style.backgroundColor = 'red';
        completedBtn.style.borderColor = 'firebrick';
    } else {
        completedBtn.style.backgroundColor = lightgreen;
        completedBtn.style.borderColor = darkgreen;
    }

// appending
    // project title section
    projectHeadingText.append(projectTitle, dropdownBtn);
    projectHeadingButtons.appendChild(removeProjectBtn);
    projectTitleSection.append(projectHeadingText, projectHeadingButtons);

    // project description section
    descriptionContainer.appendChild(descriptionText);

    // project buttons section
    projectBtnChecklist.append(dueDateBtn, completedBtn);

    // project container
    project.append(projectTitleSection, descriptionContainer, projectBtnChecklist, tasksContainer);

    // main container
    projectContainer.append(project);

// add event listeners
    // remove project btn
    removeProjectBtn.addEventListener('click', removeProject)

    // completed button
    completedBtn.addEventListener('click', toggleCompleted);
    completedBtn.addEventListener('click', function() {
            if (projectData.completion === "incomplete"){
                projectData.completion = 'completed';
                projectArraytoJSONStr();
                updateProjectHTML();
            } else {
                projectData.completion = 'incomplete';
                projectArraytoJSONStr();
                updateProjectHTML();
            }
        })
    }
    DropdownBtn();
    generateCalendar();
}

export function updateHTML() {
    console.log('Updating HTML with current task array:', taskArray);
    tasksContainer.innerHTML = '';

    for (let i = 0; i < taskArray.length; i++) {
        const taskData = taskArray[i];
        if (!taskData) {
            console.error(`taskArray[${i}] is null or undefined`);
            continue;
        }

        // Creating elements
        const taskHeader = document.createElement('h2');
        const task = document.createElement('div');
        const taskTitleSection = document.createElement('div');
        const taskTitle = document.createElement('h2');
        const btnChecklist = document.createElement('div');
        const priorityButton = document.createElement('button');
        const dueDateButton = document.createElement('button');
        const completedButton = document.createElement('button');
        const removeTaskBtn = document.createElement('button');

        // Add classes to elements
        taskHeader.classList.add('task-header');
        task.classList.add('tasks');
        taskTitleSection.classList.add('taskTitleSection');
        taskTitle.classList.add('task-title');
        
        btnChecklist.classList.add('btnCheckList');
        priorityButton.classList.add('btnCheck');
        priorityButton.classList.add('priorityBtn');
        dueDateButton.classList.add('btnCheck');
        dueDateButton.classList.add('dateBtn');
        completedButton.classList.add('btnCheck');
        completedButton.classList.add('completedBtn');
        removeTaskBtn.classList.add('removeTaskBtn');

        // default task settings
        taskHeader.textContent = 'Tasks';
        taskTitle.innerHTML = taskData.name || 'No Task Name';
        priorityButton.innerHTML = taskData.priority || 'No Priority';
        dueDateButton.innerHTML = taskData.date || 'No Date';
        completedButton.textContent = taskData.completion;
        removeTaskBtn.innerHTML = 'x';

        // Add dataset id for each task
        task.dataset.id = taskData.id || '';
        removeTaskBtn.dataset.id = taskData.id || '';

        // Add event listener to the remove button
        removeTaskBtn.addEventListener('click', removeTask);

        // Append elements to parents
        taskTitleSection.appendChild(taskTitle);
        taskTitleSection.appendChild(removeTaskBtn);

        btnChecklist.appendChild(priorityButton);
        btnChecklist.appendChild(dueDateButton);
        btnChecklist.appendChild(completedButton);
        task.appendChild(taskTitleSection);
        task.appendChild(btnChecklist);

        // Add Color to Buttons
        if (taskData.completion === 'incomplete'){
            completedButton.style.backgroundColor = 'red';
            completedButton.style.borderColor = 'firebrick';
        } else {
            completedButton.style.backgroundColor = lightgreen;
            completedButton.style.borderColor = darkgreen;
        }

        // Due date button styles
        dueDateButton.style.borderColor = '#7d4eff';

        // Priority Button Colors
        if (priorityButton.textContent === 'low'){
            priorityButton.style.backgroundColor = lightgreen;
            priorityButton.style.borderColor = darkgreen;
        } else if (priorityButton.textContent === 'medium') {
            priorityButton.style.backgroundColor = '#ccad00';
            priorityButton.style.borderColor = '#998200';
        } else if (priorityButton.textContent === 'high') {
            priorityButton.style.backgroundColor = 'red';
            priorityButton.style.borderColor = 'firebrick';
        }

        // Append to main container
        tasksContainer.append(task);

        // toggle functions for completed button
        completedButton.addEventListener('click', toggleCompleted);
        completedButton.addEventListener('click', function() {
            if (taskData.completion === "incomplete"){
                taskData.completion = 'completed';
                taskArraytoJSONStr();
                updateHTML();
            } else {
                taskData.completion = 'incomplete'
                taskArraytoJSONStr();
                updateHTML();
            }
        })
    }
    generateCalendar();
}

// toggle complete / incomplete button
function toggleCompleted () {
    const buttons = document.querySelectorAll('.completedBtn');
    buttons.forEach(button => {
        let isComplete = true;
        button.addEventListener('click', function(event){
            if (isComplete) {
                button.style.backgroundColor = lightgreen;
                button.style.borderColor = darkgreen;   
                isComplete = false;
            } else {
                button.style.backgroundColor = 'red';
                button.style.borderColor = 'firebrick';
                isComplete = true;
            }
        })
    })
}


// Function to remove task based on data set id
export function removeTask(event) {
    const taskId = event.target.dataset.id; // Get the task ID from the clicked element
    const taskIndex = taskArray.findIndex(task => task.id == taskId); // Find the index of the task to be removed
    
    if (taskIndex > -1) {
        const removedTask = taskArray[taskIndex]; // Store the removed task
        taskArray.splice(taskIndex, 1); // Remove the task from the task array
        updateHTML();
        taskArraytoJSONStr(); // Save the updated task array to local storage
        
        // Log the updated task array
        console.log("Task array after removal:", taskArray);
        
        // Remove the task from all projects in projectArray
        projectArray.forEach(project => {
            // Use a filter to remove the task by name
            project.tasks = project.tasks.filter(task => task.name !== removedTask.name);
        });
        
        // Log the updated project array
        console.log("Project Array after removing task:", projectArray);
        projectArraytoJSONStr(); // Save the updated project array to local storage if needed
        generateCalendar();
    }
}


function removeProject(event) {
    const projectId = event.target.dataset.id;
    const projectIndex = projectArray.findIndex (project => project.id == projectId);
    if (projectIndex > -1) {
        projectArray.splice(projectIndex, 1);
        updateProjectHTML();
        projectArraytoJSONStr();
        generateCalendar();
        console.log("Project array after removal:", projectArray);
    }
}

// Object array to JSON string -> local storage
export function taskArraytoJSONStr() {
    const JSONstr = JSON.stringify(taskArray);
    localStorage.setItem("tasksJSON", JSONstr);
}

export function projectArraytoJSONStr () {
    const JSONstr = JSON.stringify(projectArray);
    localStorage.setItem("projectsJSON", JSONstr);
}

// Local storage -> object array
export function JSONstrtoTaskArray() {
    let taskArrayStr = localStorage.getItem("tasksJSON");
    if (!taskArrayStr) {
        console.warn('No task array found in local storage, initializing empty array');
        taskArray = [];
    } else {
        try {
            let objArray = JSON.parse(taskArrayStr);
            if (Array.isArray(objArray)) {
                taskArray = objArray;
            } else {
                console.error('Parsed task array is not an array, initializing empty array');
                taskArray = [];
            }
        } catch (e) {
            console.error('Failed to parse task array from local storage:', e);
            taskArray = [];
        }
    }
    console.log("Loaded task array from local storage:", taskArray);
}

export function JSONstrtoProjectArray() {
    let projectArrayStr = localStorage.getItem("projectsJSON");
    if (!projectArrayStr) {
        console.warn('No project array found in local storage, initializing empty array');
        projectArray = [];
    } else {
        try {
            let objArray = JSON.parse(projectArrayStr);
            if (Array.isArray(objArray)) {
                projectArray = objArray;
            } else {
                console.error('Parsed project array is not an array, initializing empty array');
                projectArray = [];
            }
        } catch (e) {
            console.error('Failed to parse project array from local storage:', e);
            projectArray = [];
        }
    }
    console.log("Loaded project array from local storage:", projectArray);
}


document.addEventListener('DOMContentLoaded', () => {
    JSONstrtoTaskArray(); // Load tasks from local storage
    JSONstrtoProjectArray();
    updateHTML(); // Update the HTML with the loaded tasks
    updateProjectHTML();
});