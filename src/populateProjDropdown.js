import { projectArray, projectContainer, removeTask, updateHTML, updateProjectHTML } from "./getTask";
// Accessing CSS Color Variables
const rootStyles = getComputedStyle(document.documentElement);
const lightgreen = rootStyles.getPropertyValue('--accent-lightgreen');
const darkgreen = rootStyles.getPropertyValue('--accent-darkgreen');

export function DropdownBtn() {
    document.querySelectorAll('.dropdownBtn').forEach((button) => {
        button.addEventListener('click', (event) => {
            const dataArray = projectArray || JSON.parse(localStorage.getItem('projectsJSON'));

            const projectContainer = event.target.closest('.projects');
            const projectContainerId = projectContainer.getAttribute('data-id');
            const currentProject = dataArray.find(project => String(project.id) === projectContainerId);

            let tasks = projectContainer.querySelector('.tasks');

            if (tasks) {
                tasks.remove();
                return;
            }

            const tasksContainer = document.getElementById('project-tasks-container');
            tasks = document.createElement('div');
            tasks.classList.add('tasks');

            currentProject.tasks.forEach(task => {
                const taskContainer = tasks;
                const taskTitleContainer = document.createElement('div');
                const btnCheckListContainer = document.createElement('div');
                const taskTitle = document.createElement('h2');
                const taskRemoveButton = document.createElement('button');
                const priorityButton = document.createElement('button');
                const dateButton = document.createElement('button');
                const completedButton = document.createElement('button');

                const taskName = task.name;
                const taskId = task.id;

                const currenttasks = document.getElementById('tasks-container');
                const allTasks = Array.from(currenttasks.querySelectorAll('.tasks'));
                const sourceTask = allTasks.find(taskElem => Number(taskElem.dataset.id) === taskId);
                const buttonsContainer = sourceTask?.querySelector('.btnCheckList');

                if (buttonsContainer) {
                    const priorityStyle = buttonsContainer.querySelector('.priorityBtn');
                    const dateStyle = buttonsContainer.querySelector('.dateBtn');
                    const completedStyle = buttonsContainer.querySelector('.completedBtn');

                    const computedPriorityStyle = getComputedStyle(priorityStyle);
                    const computedDateStyle = getComputedStyle(dateStyle);
                    const computedCompletedStyle = getComputedStyle(completedStyle);

                    [priorityButton, dateButton, completedButton].forEach((button, index) => {
                        const style = [computedPriorityStyle, computedDateStyle, computedCompletedStyle][index];
                        for (let property of style) {
                            button.style[property] = style.getPropertyValue(property);
                        }
                    });
                }

                priorityButton.textContent = task.priority;
                dateButton.textContent = task.date;
                completedButton.textContent = task.completion;

                taskTitle.textContent = taskName;
                taskRemoveButton.innerHTML = 'x';
                taskRemoveButton.dataset.id = taskId;

                taskTitleContainer.classList.add('taskTitleSection');
                taskRemoveButton.classList.add('removeTaskBtn');
                taskTitle.classList.add('task-title');
                btnCheckListContainer.classList.add('btnCheckList');
                priorityButton.classList.add('btnCheck');
                dateButton.classList.add('btnCheck', 'dateBtn');
                completedButton.classList.add('btnCheck', 'completedBtn');

                // Update the background color and border color of the completedButton based on completion status
                if (task.completion === 'Complete') {
                    completedButton.style.backgroundColor = lightgreen;
                    completedButton.style.borderColor = darkgreen;  // Initial border color for "Complete"
                } else {
                    completedButton.style.backgroundColor = 'red';
                    completedButton.style.borderColor = 'firebrick';  // Initial border color for "Incomplete"
                }

                taskTitleContainer.append(taskTitle, taskRemoveButton);
                btnCheckListContainer.append(priorityButton, dateButton, completedButton);
                tasks.append(taskTitleContainer, btnCheckListContainer);

                // Add an event listener to update task completion
                completedButton.addEventListener('click', () => {
                    // Toggle or update the completion status
                    task.completion = task.completion === 'Incomplete' ? 'Complete' : 'Incomplete';
                    completedButton.textContent = task.completion;

                    // Change the background color and border color based on completion status
                    if (task.completion === 'Complete') {
                        completedButton.style.backgroundColor = lightgreen;
                        completedButton.style.borderColor = darkgreen;
                    } else {
                        completedButton.style.backgroundColor = 'red';
                        completedButton.style.borderColor = 'firebrick';
                    }

                    // Save updated data to local storage
                    localStorage.setItem('projectsJSON', JSON.stringify(dataArray));

                    // Optionally update the UI or call a function to reflect changes
                    updateHTML(); // Or another function that updates the UI
                });
            });

            tasksContainer.append(tasks);
            projectContainer.append(tasksContainer);
        });
    });
}
